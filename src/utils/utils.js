export const createPromise = (
  url,
  headers,
  successAction = undefined,
  method = "GET",
  body = null
) => {
  return fetch(url, {
    method: method,
    headers: headers,
    body: body && JSON.stringify(body),
  }).then((response) => {
    if (response.ok) {
      typeof successAction === "function" && successAction();
      return response.json();
    }

    return Promise.reject(
      `Ошибка при ${method}-запросе ${url}: ${response.status}.${
        (body && " Тело запроса: " + JSON.stringify(body)) ?? ""
      }`
    );
  });
};

export class Api {
  constructor(
    { baseUrl, headers },
    { cardsUrl, authorUrl, authorAvatarUrl, cardUrl, likeUrl },
    promiseGenerator
  ) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._cardsUrl = cardsUrl;
    this._authorUrl = authorUrl;
    this._authorAvatarUrl = authorAvatarUrl;
    this._cardUrl = cardUrl;
    this._likeUrl = likeUrl;
    this._promiseGenerator = promiseGenerator;
  }

  getInitialCards() {
    return this._promiseGenerator(
      this._baseUrl + this._cardsUrl,
      this._headers
    );
  }

  getAuthor() {
    return this._promiseGenerator(
      this._baseUrl + this._authorUrl,
      this._headers
    );
  }

  patchAuthor(name, description, successAction) {
    return this._promiseGenerator(
      this._baseUrl + this._authorUrl,
      this._headers,
      successAction,
      "PATCH",
      { name: name, about: description }
    );
  }

  postCard(link, name, successAction) {
    return this._promiseGenerator(
      this._baseUrl + this._cardsUrl,
      this._headers,
      successAction,
      "POST",
      { name: name, link: link }
    );
  }

  deleteCard(cardId, successAction) {
    return this._promiseGenerator(
      this._baseUrl + this._cardUrl.template.replace(this._cardUrl.key, cardId),
      this._headers,
      successAction,
      "DELETE"
    ).then(() => cardId);
  }

  putLike(cardId, successAction) {
    return this._promiseGenerator(
      this._baseUrl + this._likeUrl.template.replace(this._likeUrl.key, cardId),
      this._headers,
      successAction,
      "PUT"
    );
  }

  deleteLike(cardId, successAction) {
    return this._promiseGenerator(
      this._baseUrl + this._likeUrl.template.replace(this._likeUrl.key, cardId),
      this._headers,
      successAction,
      "DELETE"
    );
  }

  patchAvatar(url, successAction) {
    return this._promiseGenerator(
      this._baseUrl + this._authorAvatarUrl,
      this._headers,
      successAction,
      "PATCH",
      { avatar: url }
    );
  }
}

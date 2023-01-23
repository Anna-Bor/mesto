//  Переменные
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Модальные окна
const popups = document.querySelectorAll(".popup");

//  Элементы модального окна редактирования автора
const editAuthorPopupElement = document.querySelector(".popup_edit_author");
const editAuthorFormElement = document.querySelector(
  ".popup__input-content_edit_author"
);
const nameInputElement = document.querySelector(".popup__field_name_name");
const jobInputElement = document.querySelector(
  ".popup__field_name_description"
);
const editAuthorClosePopupButton = document.querySelector(
  ".popup__close-button_edit_author"
);

// Элементы модального окна добавления места
const addPlacePopupElement = document.querySelector(".popup_add_place");
const addPlaceFormElement = document.querySelector(
  ".popup__input-content_add_place"
);
const placeInputElement = document.querySelector(
  ".popup__field_name_name-place"
);
const linkInputElement = document.querySelector(".popup__field_name_link");
const addPlaceClosePopupButton = document.querySelector(
  ".popup__close-button_add_place"
);

// Элементы модального окна показа картинки
const showImagePopupImageContainer = document.querySelector(
  ".popup__image-container"
);
const showImagePopupImageCaption = document.querySelector(
  ".popup__image-caption"
);
const showImagePopupElement = document.querySelector(".popup_show-image");
const showImageCloseButton = document.querySelector(
  ".popup__close-button_show-image"
);

// Элементы профиля
const nameElement = document.querySelector(".profile__header-author");
const jobElement = document.querySelector(".profile__description");
const openEditAuthorPopupButton = document.querySelector(
  ".profile__edit-button"
);
const addPlaceButton = document.querySelector(".profile__add-button");

// Контейнер карточек
const places = document.querySelector(".places");

// Template карточки
const cardTemplate = document.querySelector("#card");

// Функции
// Функции для карточек
const deleteCard = (event) => event.target.closest(".place").remove();
const toggleLike = (event) =>
  event.target.classList.toggle("place__heart-button_active");

// Функции работы с карточками
const createCard = (label, url) => {
  const card = cardTemplate.content.cloneNode(true);

  const image = card.querySelector(".place__picture");
  image.setAttribute("src", url);
  image.setAttribute("alt", label);
  image.addEventListener("click", () => showPicture(label, url));

  const deleteButton = card.querySelector(".place__trash-button");
  deleteButton.addEventListener("click", deleteCard);

  const likeButton = card.querySelector(".place__heart-button");
  likeButton.addEventListener("click", toggleLike);

  const title = card.querySelector(".place__header");
  title.textContent = label;

  return card;
};

const renderCard = (label, url, container) => {
  container.prepend(createCard(label, url));
};

// Функция закрытия модального окна по нажатию на Escape
const closePopupByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup !== null) {
      closePopup(openedPopup);
    }
  }
};

// Функция открытия модального окна
const openPopup = (element) => {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
};

// Функция закрытия модального окна
const closePopup = (element) => {
  element.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscape);
};

// Функции для модального окна редактирования автора
const openPopupEditAuthor = () => {
  nameInputElement.value = nameElement.textContent;
  nameInputElement.dispatchEvent(new Event("input"));
  jobInputElement.value = jobElement.textContent;
  jobInputElement.dispatchEvent(new Event("input"));
  openPopup(editAuthorPopupElement);
};

const editProfile = (event) => {
  event.preventDefault();
  nameElement.textContent = nameInputElement.value;
  jobElement.textContent = jobInputElement.value;
  closePopup(editAuthorPopupElement);
};

// Функции для модального окна добавления места
const openPopupAddPlace = () => {
  openPopup(addPlacePopupElement);
};
const addPlace = (event) => {
  event.preventDefault();
  renderCard(placeInputElement.value, linkInputElement.value, places);
  closePopup(addPlacePopupElement);
  addPlaceFormElement.reset();
};

// Функции для модального окна показа картинки из карточки
const showPicture = (label, url) => {
  showImagePopupImageContainer.setAttribute("src", url);
  showImagePopupImageContainer.setAttribute("alt", label);

  showImagePopupImageCaption.textContent = label;

  openPopup(showImagePopupElement);
};

// Обработчики
// Привязка событий к элементам модального окна редактирования автора
openEditAuthorPopupButton.addEventListener("click", openPopupEditAuthor);
editAuthorFormElement.addEventListener("submit", editProfile);

// Привязка событий к элементам модального окна добавления места
addPlaceButton.addEventListener("click", openPopupAddPlace);
addPlaceFormElement.addEventListener("submit", addPlace);

// Привязка событий закрытия модальных окон
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-image")
    ) {
      closePopup(popup);
    }
  });
});

initialCards.forEach((initialCard) => {
  renderCard(initialCard.name, initialCard.link, places);
});

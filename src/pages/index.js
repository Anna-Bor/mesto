import "./index.css";
import {
  cardOptions,
  credentials,
  generalOptions,
  popupOptions,
  urls,
  userOptions,
} from "../utils/constants";
import { createPromise } from "../utils/utils";
import {
  Api,
  Card,
  FormValidator,
  PopupWithForm,
  PopupWithImage,
  Section,
  UserInfo,
} from "../components";

// Элементы страницы
const buttonOpenEditAuthorPopup = document.querySelector(
  generalOptions.editAuthorButtonSelector
);
const buttonOpenAddPlacePopup = document.querySelector(
  generalOptions.addPlaceButtonSelector
);
const buttonOpenChangeAvatarPopup = document.querySelector(
  generalOptions.changeAvatarButtonSelector
);
const formEditAuthor = document
  .querySelector(popupOptions.editAuthor.popupSelector)
  .querySelector(popupOptions.form.formSelector);
const formAddPlace = document
  .querySelector(popupOptions.addPlace.popupSelector)
  .querySelector(popupOptions.form.formSelector);
const formAvatarChange = document
  .querySelector(popupOptions.changeAvatar.popupSelector)
  .querySelector(popupOptions.form.formSelector);

// Карточки
const cards = {};

// Функция создания карточки
const createCard = (id, link, name, likes, ownerId) => {
  const card = new Card(
    id,
    name,
    link,
    likes,
    author.getUserInfo().id !== ownerId,
    likes.some((like) => like._id === author.getUserInfo().id),
    (link, name) => imagePopup.open(link, name),
    (id) => confirmPopup.open({ id: id }),
    (hasLike, id) => (hasLike ? api.deleteLike(id) : api.putLike(id)),
    cardOptions
  );

  cards[id] = card;

  return card.createCard();
};

// Класс для работы с секцией с карточками
const cardsSection = new Section(function ({ _id, link, name, likes, owner }) {
  this.addItem(createCard(_id, link, name, likes, owner._id));
}, generalOptions.cardsSectionSelector);

// Класс для работы с данными о пользователе
const author = new UserInfo(userOptions);

// Класс для работы с API
const api = new Api(
  {
    baseUrl: `${urls.baseUrl}/${credentials.group}/`,
    headers: {
      authorization: credentials.token,
      "Content-Type": "application/json",
    },
  },
  urls,
  createPromise
);

// Запросы к серверу
Promise.all([api.getAuthor(), api.getInitialCards()]).then(
  ([{ _id, name, about, avatar }, cards]) => {
    author.setUserInfo({ id: _id, name: name, description: about });
    author.setUserAvatar(avatar);
    cardsSection.renderAll(cards);
  }
);

// Валидаторы форм
const placePopupFormValidator = new FormValidator(
  popupOptions.form,
  formAddPlace
);
const authorPopupFormValidator = new FormValidator(
  popupOptions.form,
  formEditAuthor
);
const avatarPopupFormValidator = new FormValidator(
  popupOptions.form,
  formAvatarChange
);

// Модальные окна
const imagePopup = new PopupWithImage(
  popupOptions.showImagePopup,
  popupOptions.shared
);
const placePopup = new PopupWithForm(
  popupOptions.addPlace.popupSelector,
  ({ link, place }) => {
    placePopup.renderLoading();
    return api
      .postCard(link, place, placePopup.close.bind(placePopup))
      .then(
        ({ _id, link, name, likes, owner }) =>
          _id &&
          link &&
          name &&
          likes &&
          owner &&
          cardsSection.addItem(createCard(_id, link, name, likes, owner._id))
      )
      .catch((error) => {
        console.error(error);
      })
      .finally(() => placePopup.renderDefaultButtonText());
  },
  placePopupFormValidator.enableValidation.bind(placePopupFormValidator),
  popupOptions.shared,
  popupOptions.form
);
const authorPopup = new PopupWithForm(
  popupOptions.editAuthor.popupSelector,
  ({ name, description }) => {
    authorPopup.renderLoading();
    return api
      .patchAuthor(name, description, authorPopup.close.bind(authorPopup))
      .then(
        ({ _id, name, about }) =>
          _id &&
          name &&
          about &&
          author.setUserInfo({
            id: _id,
            name: name,
            description: about,
          })
      )
      .catch((error) => {
        console.error(error);
      })
      .finally(() => authorPopup.renderDefaultButtonText());
  },
  authorPopupFormValidator.enableValidation.bind(authorPopupFormValidator),
  popupOptions.shared,
  popupOptions.form
);
const confirmPopup = new PopupWithForm(
  popupOptions.confirmPopup.popupSelector,
  ({ id }) => {
    confirmPopup.renderLoading();
    return api
      .deleteCard(id, confirmPopup.close.bind(confirmPopup))
      .then((cardId) => {
        if (cardId && cards[cardId]) {
          cards[cardId].deleteCard();
          cards[cardId] = undefined;
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => confirmPopup.renderDefaultButtonText());
  },
  () => void 0,
  popupOptions.shared,
  popupOptions.form
);
const avatarPopup = new PopupWithForm(
  popupOptions.changeAvatar.popupSelector,
  ({ url }) => {
    avatarPopup.renderLoading();
    return api
      .patchAvatar(url, avatarPopup.close.bind(avatarPopup))
      .then(({ avatar }) => avatar && author.setUserAvatar(avatar))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => avatarPopup.renderDefaultButtonText());
  },
  avatarPopupFormValidator.enableValidation.bind(avatarPopupFormValidator),
  popupOptions.shared,
  popupOptions.form
);

// Привязка событий
buttonOpenAddPlacePopup.addEventListener("click", () => placePopup.open());
buttonOpenEditAuthorPopup.addEventListener("click", () =>
  authorPopup.open(author.getUserInfo())
);
buttonOpenChangeAvatarPopup.addEventListener("click", () =>
  avatarPopup.open(author.getUserAvatar())
);

imagePopup.setEventListeners();
placePopup.setEventListeners();
authorPopup.setEventListeners();
confirmPopup.setEventListeners();
avatarPopup.setEventListeners();

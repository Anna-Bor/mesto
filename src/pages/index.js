import "./index.css";
import { Card } from "../components/Card";
import {
  initialCards,
  formOptions,
  popupOptions,
  userOptions,
  cardOptions,
  generalOptions,
} from "../utils/constants";
import { PopupWithImage } from "../components/PopupWithImage";
import { Section } from "../components/Section";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { FormValidator } from "../components/FormValidator";

const buttonOpenEditAuthorPopup = document.querySelector(
  generalOptions.editAuthorButtonSelector
);
const formEditAuthorPopup = document
  .querySelector(popupOptions.editAuthor.popupSelector)
  .querySelector(generalOptions.formSelector);
const buttonAddPlace = document.querySelector(
  generalOptions.addPlaceButtonSelector
);
const formAddPlace = document
  .querySelector(popupOptions.addPlace.popupSelector)
  .querySelector(generalOptions.formSelector);

const imagePopup = new PopupWithImage(
  popupOptions.showImagePopup,
  popupOptions.shared
);
imagePopup.setEventListeners();

const createCard = (link, name) =>
  new Card(
    name,
    link,
    (link, name) => imagePopup.open(link, name),
    cardOptions
  ).createCard();
const cardsSection = new Section(function ({ link, name }) {
  this.addItem(createCard(link, name));
}, generalOptions.cardsSectionSelector);
cardsSection.renderAll(initialCards);

const addPlace = ({ place, link }) => {
  cardsSection.addItem(createCard(link, place));
};
const placePopupFormValidator = new FormValidator(formOptions, formAddPlace);
const placePopup = new PopupWithForm(
  popupOptions.addPlace.popupSelector,
  addPlace,
  placePopupFormValidator.enableValidation.bind(placePopupFormValidator),
  popupOptions.shared,
  formOptions
);
placePopup.setEventListeners();
buttonAddPlace.addEventListener("click", () => placePopup.open());

const author = new UserInfo(userOptions);
const authorPopupFormValidator = new FormValidator(
  formOptions,
  formEditAuthorPopup
);
const authorPopup = new PopupWithForm(
  popupOptions.editAuthor.popupSelector,
  ({ name, description }) => author.setUserInfo({ name, description }),
  authorPopupFormValidator.enableValidation.bind(authorPopupFormValidator),
  popupOptions.shared,
  formOptions
);
authorPopup.setEventListeners();
buttonOpenEditAuthorPopup.addEventListener("click", () =>
  authorPopup.open(author.getUserInfo())
);

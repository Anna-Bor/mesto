export const initialCards = [
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

export const formOptions = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__field_invalid",
  errorClass: "popup__field-error_active",
};

export const popupOptions = {
  shared: {
    openedPopupClass: "popup_opened",
    closeElementClass: "popup__close-image",
  },
  addPlace: {
    popupSelector: ".popup_type_place",
  },
  editAuthor: {
    popupSelector: ".popup_type_author",
  },
  showImagePopup: {
    popupSelector: ".popup_type_image",
    imageContainerSelector: ".popup__image-container",
    imageCaptionSelector: ".popup__image-caption",
  },
};

export const userOptions = {
  nameSelector: ".profile__header-author",
  descriptionSelector: ".profile__description",
};

export const cardOptions = {
  activeHeartClass: "place__heart-button_active",
  templateSelector: "#card",
  mainSelector: ".place",
  titleSelector: ".place__header",
  imageSelector: ".place__picture",
  trashButtonSelector: ".place__trash-button",
  heartButtonSelector: ".place__heart-button",
};

export const generalOptions = {
  formSelector: "form",
  addPlaceButtonSelector: ".profile__add-button",
  editAuthorButtonSelector: ".profile__edit-button",
  cardsSectionSelector: ".places",
};

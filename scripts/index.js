const popupElement = document.querySelector(".popup");
const formElement = document.querySelector(".popup__input-content");
const nameInputElement = document.querySelector(".popup__field_name_name");
const jobInputElement = document.querySelector(
  ".popup__field_name_description"
);
const nameElement = document.querySelector(".profile__header-author");
const jobElement = document.querySelector(".profile__description");
const openPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-button");

const openPopup = () => {
  nameInputElement.value = nameElement.textContent;
  jobInputElement.value = jobElement.textContent;
  popupElement.classList.add("popup_opened");
};

const closePopup = () => {
  popupElement.classList.remove("popup_opened");
};

const editProfile = (event) => {
  event.preventDefault();
  nameElement.textContent = nameInputElement.value;
  jobElement.textContent = jobInputElement.value;
  closePopup();
};

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", editProfile);

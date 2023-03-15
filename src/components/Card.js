export class Card {
  constructor(
    name,
    link,
    handleCardClick,
    {
      activeHeartClass,
      templateSelector,
      mainSelector,
      titleSelector,
      imageSelector,
      trashButtonSelector,
      heartButtonSelector,
    }
  ) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._activeHeartClass = activeHeartClass;
    this._templateSelector = templateSelector;
    this._mainSelector = mainSelector;
    this._titleSelector = titleSelector;
    this._imageSelector = imageSelector;
    this._trashButtonSelector = trashButtonSelector;
    this._heartButtonSelector = heartButtonSelector;
  }

  _deleteCard() {
    this._card.remove();
  }

  _toggleLike() {
    this._likeButton.classList.toggle(this._activeHeartClass);
  }

  _getCardTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(this._mainSelector)
      .cloneNode(true);
  }

  _setEventListeners() {
    this._image.addEventListener("click", () =>
      this._handleCardClick(this._link, this._name)
    );

    this._deleteButton.addEventListener("click", () => this._deleteCard());

    this._likeButton.addEventListener("click", () => this._toggleLike());
  }

  createCard() {
    this._card = this._getCardTemplate();

    this._title = this._card.querySelector(this._titleSelector);
    this._title.textContent = this._name;

    this._image = this._card.querySelector(this._imageSelector);
    this._image.setAttribute("src", this._link);
    this._image.setAttribute("alt", this._name);

    this._deleteButton = this._card.querySelector(this._trashButtonSelector);
    this._likeButton = this._card.querySelector(this._heartButtonSelector);

    this._setEventListeners();

    return this._card;
  }
}

export class Card {
  constructor(
    id,
    name,
    link,
    likes,
    disableDeleteButton,
    hasAuthorLike,
    handleCardClick,
    handleTrashButtonClick,
    handleHeartButtonClick,
    {
      activeHeartClass,
      disableTrashClass,
      templateSelector,
      mainSelector,
      titleSelector,
      imageSelector,
      trashButtonSelector,
      heartButtonSelector,
      likeCounterSelector,
    }
  ) {
    this._id = id;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._disableDeleteButton = disableDeleteButton;
    this._hasAuthorLike = hasAuthorLike;
    this._handleCardClick = handleCardClick;
    this._handleTrashButtonClick = handleTrashButtonClick;
    this._handleHeartButtonClick = handleHeartButtonClick;
    this._activeHeartClass = activeHeartClass;
    this._disableTrashClass = disableTrashClass;
    this._templateSelector = templateSelector;
    this._mainSelector = mainSelector;
    this._titleSelector = titleSelector;
    this._imageSelector = imageSelector;
    this._trashButtonSelector = trashButtonSelector;
    this._heartButtonSelector = heartButtonSelector;
    this._likeCounterSelector = likeCounterSelector;
  }

  createCard() {
    this._card = this._getCardTemplate();

    this._title = this._card.querySelector(this._titleSelector);
    this._title.textContent = this._name;

    this._image = this._card.querySelector(this._imageSelector);
    this._image.setAttribute("src", this._link);
    this._image.setAttribute("alt", this._name);

    this._deleteButton = this._card.querySelector(this._trashButtonSelector);
    if (this._disableDeleteButton) {
      this._deleteButton.classList.add(this._disableTrashClass);
    }

    this._likeButton = this._card.querySelector(this._heartButtonSelector);
    if (this._hasAuthorLike) {
      this._likeButton.classList.add(this._activeHeartClass);
    }

    this._likeCounter = this._card.querySelector(this._likeCounterSelector);
    this._likeCounter.textContent = this._likes.length;

    this._setEventListeners();

    return this._card;
  }

  deleteCard() {
    this._card.remove();
  }

  _openDeletePopup() {
    this._handleTrashButtonClick(this._id);
  }

  _toggleLike() {
    this._handleHeartButtonClick(this._hasAuthorLike, this._id).then(
      ({ likes }) => {
        this._likes = likes;
        this._likeCounter.textContent = this._likes.length;
        this._hasAuthorLike = !this._hasAuthorLike;
        this._likeButton.classList.toggle(this._activeHeartClass);
      }
    );
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

    if (!this._disableDeleteButton) {
      this._deleteButton.addEventListener("click", () =>
        this._openDeletePopup()
      );
    }

    this._likeButton.addEventListener("click", () => this._toggleLike());
  }
}

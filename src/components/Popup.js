export class Popup {
  constructor(selector, { openedPopupClass, closeElementClass }) {
    this._element = document.querySelector(selector);
    this._openedPopupClass = openedPopupClass;
    this._closeElementClass = closeElementClass;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._element.classList.add(this._openedPopupClass);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._element.classList.remove(this._openedPopupClass);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._element.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains(this._openedPopupClass) ||
        evt.target.classList.contains(this._closeElementClass)
      ) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}

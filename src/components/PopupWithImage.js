import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(
    { popupSelector, imageContainerSelector, imageCaptionSelector },
    sharedPopupOptions
  ) {
    super(popupSelector, sharedPopupOptions);
    this._imageContainer = this._element.querySelector(imageContainerSelector);
    this._imageCaption = this._element.querySelector(imageCaptionSelector);
  }

  open(link, name) {
    this._imageContainer.setAttribute("src", link);
    this._imageContainer.setAttribute("alt", name);

    this._imageCaption.textContent = name;
    super.open();
  }
}

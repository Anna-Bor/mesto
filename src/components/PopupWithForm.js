import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(
    selector,
    callback,
    validatorCallback,
    sharedPopupOptions,
    { formSelector, inputSelector, submitButtonSelector, loadingText }
  ) {
    super(selector, sharedPopupOptions);
    this._form = this._element.querySelector(formSelector);
    this._inputs = Array.from(this._form.querySelectorAll(inputSelector));
    this._submitButton = this._form.querySelector(submitButtonSelector);
    this._submitButtonText = this._submitButton.textContent;
    this._loadingText = loadingText;
    this._callback = callback;

    validatorCallback();
  }

  open(inputValues) {
    if (inputValues) {
      Object.keys(inputValues).forEach((key) => {
        const input = this._inputs.find((input) => input.name === key);
        if (input) {
          input.value = inputValues[key];
          input.dispatchEvent(new Event("input"));
        }
      });
    }
    super.open();
  }

  close() {
    super.close();
    this.renderDefaultButtonText();
    this._form.reset();
  }

  setEventListeners() {
    this._form.addEventListener("submit", () => {
      this._callback(this._getInputValues());
    });
    super.setEventListeners();
  }

  renderLoading() {
    this._submitButton.textContent = this._loadingText;
  }

  renderDefaultButtonText() {
    this._submitButton.textContent = this._submitButtonText;
  }

  _getInputValues() {
    return this._inputs.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr.value }),
      {}
    );
  }
}

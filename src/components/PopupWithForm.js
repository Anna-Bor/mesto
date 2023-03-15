import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(
    selector,
    callback,
    validatorCallback,
    sharedPopupOptions,
    formOptions
  ) {
    super(selector, sharedPopupOptions);
    this._form = this._element.querySelector("form");
    this._inputs = Array.from(
      this._element.querySelectorAll(formOptions.inputSelector)
    );
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
    this._form.reset();
  }

  setEventListeners() {
    this._form.addEventListener("submit", () => {
      this._callback(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  _getInputValues() {
    return this._inputs.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr.value }),
      {}
    );
  }
}

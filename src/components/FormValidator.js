export class FormValidator {
  _options;
  _element;
  _inputList;
  _buttonElement;

  constructor(options, element) {
    this._options = options;
    this._element = element;
    this._inputList = Array.from(
      element.querySelectorAll(options.inputSelector)
    );
    this._buttonElement = element.querySelector(options.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    inputElement.classList.add(this._options.inputErrorClass);
    const errorElement = this._element.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._options.errorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._options.inputErrorClass);
    const errorElement = this._element.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.remove(this._options.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._options.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    } else {
      this._buttonElement.classList.remove(this._options.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._element.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

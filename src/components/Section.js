export class Section {
  _renderer;

  constructor(renderer, selector) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  renderAll(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._element.prepend(item);
  }
}

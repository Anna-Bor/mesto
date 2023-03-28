export class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      id: this._id,
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  setUserInfo({ id, name, description }) {
    if (id) {
      this._id = id;
    }
    if (name) {
      this._nameElement.textContent = name;
    }
    if (description) {
      this._descriptionElement.textContent = description;
    }
  }

  setUserAvatar(url) {
    if (url) {
      this._avatarElement.src = url;
    }
  }
  getUserAvatar() {
    return { url: this._avatarElement.src };
  }
}

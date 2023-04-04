(()=>{"use strict";var t={baseUrl:"https://mesto.nomoreparties.co/v1",cardsUrl:"cards",authorUrl:"users/me",authorAvatarUrl:"users/me/avatar",cardUrl:{template:"cards/{{cardId}}",key:"{{cardId}}"},likeUrl:{template:"cards/{{cardId}}/likes",key:"{{cardId}}"}},e={inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__field_invalid",errorClass:"popup__field-error_active"},r={openedPopupClass:"popup_opened",closeElementClass:"popup__close-image"},n=".popup_type_place",o=".popup_type_author",i=".popup_type_avatar",a={activeHeartClass:"place__heart-button_active",disableTrashClass:"place__trash-button_disabled",templateSelector:"#card",mainSelector:".place",titleSelector:".place__header",imageSelector:".place__picture",trashButtonSelector:".place__trash-button",heartButtonSelector:".place__heart-button",likeCounterSelector:".place__number"},l={formSelector:"form",addPlaceButtonSelector:".profile__add-button",editAuthorButtonSelector:".profile__edit-button",cardsSectionSelector:".places",changeAvatarButtonSelector:".profile__avatar-button"};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var s=function(){function t(e,r,n,o,i,a,l,u,c,s){var f=s.activeHeartClass,p=s.disableTrashClass,h=s.templateSelector,y=s.mainSelector,d=s.titleSelector,v=s.imageSelector,m=s.trashButtonSelector,_=s.heartButtonSelector,b=s.likeCounterSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=e,this._name=r,this._link=n,this._likes=o,this._disableDeleteButton=i,this._hasAuthorLike=a,this._handleCardClick=l,this._handleTrashButtonClick=u,this._handleHeartButtonClick=c,this._activeHeartClass=f,this._disableTrashClass=p,this._templateSelector=h,this._mainSelector=y,this._titleSelector=d,this._imageSelector=v,this._trashButtonSelector=m,this._heartButtonSelector=_,this._likeCounterSelector=b}var e,r;return e=t,(r=[{key:"createCard",value:function(){return this._card=this._getCardTemplate(),this._title=this._card.querySelector(this._titleSelector),this._title.textContent=this._name,this._image=this._card.querySelector(this._imageSelector),this._image.setAttribute("src",this._link),this._image.setAttribute("alt",this._name),this._deleteButton=this._card.querySelector(this._trashButtonSelector),this._disableDeleteButton&&this._deleteButton.classList.add(this._disableTrashClass),this._likeButton=this._card.querySelector(this._heartButtonSelector),this._hasAuthorLike&&this._likeButton.classList.add(this._activeHeartClass),this._likeCounter=this._card.querySelector(this._likeCounterSelector),this._likeCounter.textContent=this._likes.length,this._setEventListeners(),this._card}},{key:"deleteCard",value:function(){this._card.remove()}},{key:"_openDeletePopup",value:function(){this._handleTrashButtonClick(this._id)}},{key:"_toggleLike",value:function(){var t=this;this._handleHeartButtonClick(this._hasAuthorLike,this._id).then((function(e){var r=e.likes;t._likes=r,t._likeCounter.textContent=t._likes.length,t._hasAuthorLike=!t._hasAuthorLike,t._likeButton.classList.toggle(t._activeHeartClass)}))}},{key:"_getCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(this._mainSelector).cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._image.addEventListener("click",(function(){return t._handleCardClick(t._link,t._name)})),this._disableDeleteButton||this._deleteButton.addEventListener("click",(function(){return t._openDeletePopup()})),this._likeButton.addEventListener("click",(function(){return t._toggleLike()}))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var y=function(){function t(e,r){var n,o,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=void 0,(o=h(o="_renderer"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._renderer=e,this._element=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderAll",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._element.prepend(t)}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var m=function(){function t(e){var r=e.nameSelector,n=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(r),this._descriptionElement=document.querySelector(n),this._avatarElement=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._nameElement.textContent,description:this._descriptionElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.id,r=t.name,n=t.description;this._id=e,this._nameElement.textContent=r,this._descriptionElement.textContent=n}},{key:"setUserAvatar",value:function(t){this._avatarElement.src=t}},{key:"getUserAvatar",value:function(){return{url:this._avatarElement.src}}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var S=function(){function t(e,r,n){var o=e.baseUrl,i=e.headers,a=r.cardsUrl,l=r.authorUrl,u=r.authorAvatarUrl,c=r.cardUrl,s=r.likeUrl;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=o,this._headers=i,this._cardsUrl=a,this._authorUrl=l,this._authorAvatarUrl=u,this._cardUrl=c,this._likeUrl=s,this._promiseGenerator=n}var e,r;return e=t,(r=[{key:"getInitialCards",value:function(){return this._promiseGenerator(this._baseUrl+this._cardsUrl,this._headers)}},{key:"getAuthor",value:function(){return this._promiseGenerator(this._baseUrl+this._authorUrl,this._headers)}},{key:"patchAuthor",value:function(t,e){return this._promiseGenerator(this._baseUrl+this._authorUrl,this._headers,"PATCH",{name:t,about:e})}},{key:"postCard",value:function(t,e){return this._promiseGenerator(this._baseUrl+this._cardsUrl,this._headers,"POST",{name:e,link:t})}},{key:"deleteCard",value:function(t){return this._promiseGenerator(this._baseUrl+this._cardUrl.template.replace(this._cardUrl.key,t),this._headers,"DELETE").then((function(){return t}))}},{key:"putLike",value:function(t){return this._promiseGenerator(this._baseUrl+this._likeUrl.template.replace(this._likeUrl.key,t),this._headers,"PUT")}},{key:"deleteLike",value:function(t){return this._promiseGenerator(this._baseUrl+this._likeUrl.template.replace(this._likeUrl.key,t),this._headers,"DELETE")}},{key:"patchAvatar",value:function(t){return this._promiseGenerator(this._baseUrl+this._authorAvatarUrl,this._headers,"PATCH",{avatar:t})}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,E(n.key),n)}}function w(t,e,r){return(e=E(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var C=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,"_options",void 0),w(this,"_element",void 0),w(this,"_inputList",void 0),w(this,"_buttonElement",void 0),this._options=e,this._element=r,this._inputList=Array.from(r.querySelectorAll(e.inputSelector)),this._buttonElement=r.querySelector(e.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){t.classList.add(this._options.inputErrorClass);var r=this._element.querySelector(".".concat(t.id,"-error"));r.textContent=e,r.classList.add(this._options.errorClass)}},{key:"_hideInputError",value:function(t){t.classList.remove(this._options.inputErrorClass);var e=this._element.querySelector(".".concat(t.id,"-error"));e.classList.remove(this._options.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._options.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._options.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._element.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}),0)})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&k(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var P=function(){function t(e,r){var n=r.openedPopupClass,o=r.closeElementClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._openedPopupClass=n,this._closeElementClass=o,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._element.classList.add(this._openedPopupClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove(this._openedPopupClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._element.addEventListener("mousedown",(function(e){(e.target.classList.contains(t._openedPopupClass)||e.target.classList.contains(t._closeElementClass))&&t.close()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(o){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var r,n=t.popupSelector,o=t.imageContainerSelector,l=t.imageCaptionSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,n,e))._imageContainer=r._element.querySelector(o),r._imageCaption=r._element.querySelector(l),r}return e=a,(r=[{key:"open",value:function(t,e){this._imageContainer.setAttribute("src",t),this._imageContainer.setAttribute("alt",e),this._imageCaption.textContent=e,A(T(a.prototype),"open",this).call(this)}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t,e,r){return(e=H(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,H(n.key),n)}}function H(t){var e=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===q(e)?e:String(e)}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},V.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(o){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e,r,n,o,l){var u,c=o.inputSelector,s=l.formSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(u=i.call(this,t,n))._form=u._element.querySelector(s),u._inputs=Array.from(u._element.querySelectorAll(c)),u._callback=e,r(),u}return e=a,(r=[{key:"open",value:function(t){var e=this;t&&Object.keys(t).forEach((function(r){var n=e._inputs.find((function(t){return t.name===r}));n&&(n.value=t[r],n.dispatchEvent(new Event("input")))})),V(J(a.prototype),"open",this).call(this)}},{key:"close",value:function(){V(J(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(){t._callback(t._getInputValues()).finally((function(){return t.close()}))})),V(J(a.prototype),"setEventListeners",this).call(this)}},{key:"_getInputValues",value:function(){return this._inputs.reduce((function(t,e){return x(x({},t),{},D({},e.name,e.value))}),{})}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(P);function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var $=document.querySelector(l.editAuthorButtonSelector),F=document.querySelector(l.addPlaceButtonSelector),K=document.querySelector(l.changeAvatarButtonSelector),Q=document.querySelector(o).querySelector(l.formSelector),W=document.querySelector(n).querySelector(l.formSelector),X=document.querySelector(i).querySelector(l.formSelector),Y={},Z=function(t,e,r,n,o){var i=new s(t,r,e,n,et.getUserInfo().id!==o,n.some((function(t){return t._id===et.getUserInfo().id})),(function(t,e){return at.open(t,e)}),(function(t){return ct.open({id:t})}),(function(t,e){return t?rt.deleteLike(e):rt.putLike(e)}),a);return Y[t]=i,i.createCard()},tt=new y((function(t){var e=t._id,r=t.link,n=t.name,o=t.likes,i=t.owner;this.addItem(Z(e,r,n,o,i._id))}),l.cardsSectionSelector),et=new m({nameSelector:".profile__header-author",descriptionSelector:".profile__description",avatarSelector:".profile__avatar"}),rt=new S({baseUrl:"".concat(t.baseUrl,"/").concat("cohort-63","/"),headers:{authorization:"0a88d0d7-8d1d-4869-baea-7caf49dae627","Content-Type":"application/json"}},t,(function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return fetch(t,{method:r,headers:e,body:n&&JSON.stringify(n)}).then((function(e){var o;return e.ok?e.json():Promise.reject("Ошибка при ".concat(r,"-запросе ").concat(t,": ").concat(e.status,".").concat(null!==(o=n&&" Тело запроса: "+JSON.stringify(n))&&void 0!==o?o:""))})).catch(console.error)}));Promise.all([rt.getAuthor(),rt.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=o._id,a=o.name,l=o.about,u=o.avatar,c=n[1];et.setUserInfo({id:i,name:a,description:l}),et.setUserAvatar(u),tt.renderAll(c)}));var nt=new C(e,W),ot=new C(e,Q),it=new C(e,X),at=new I({popupSelector:".popup_type_image",imageContainerSelector:".popup__image-container",imageCaptionSelector:".popup__image-caption"},r),lt=new M(n,(function(t){var e=t.link,r=t.place;return rt.postCard(e,r).then((function(t){var e=t._id,r=t.link,n=t.name,o=t.likes,i=t.owner;return tt.addItem(Z(e,r,n,o,i._id))}))}),nt.enableValidation.bind(nt),r,e,l),ut=new M(o,(function(t){var e=t.name,r=t.description;return rt.patchAuthor(e,r).then((function(t){var e=t._id,r=t.name,n=t.about;return et.setUserInfo({id:e,name:r,description:n})}))}),ot.enableValidation.bind(ot),r,e,l),ct=new M(".popup_type_confirm",(function(t){var e=t.id;return rt.deleteCard(e).then((function(t){Y[t]&&(Y[t].deleteCard(),Y[t]=void 0)}))}),(function(){}),r,e,l),st=new M(i,(function(t){var e=t.url;return rt.patchAvatar(e).then((function(t){var e=t.avatar;return et.setUserAvatar(e)}))}),it.enableValidation.bind(it),r,e,l);F.addEventListener("click",(function(){return lt.open()})),$.addEventListener("click",(function(){return ut.open(et.getUserInfo())})),K.addEventListener("click",(function(){return st.open(et.getUserAvatar())})),at.setEventListeners(),lt.setEventListeners(),ut.setEventListeners(),ct.setEventListeners(),st.setEventListeners()})();
//# sourceMappingURL=main.js.map
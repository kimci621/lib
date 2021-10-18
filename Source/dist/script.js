/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core */ "./src/js/lib/modules/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/listeners */ "./src/js/lib/modules/listeners.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown */ "./src/js/lib/modules/dropdown.js");
/* harmony import */ var _modules_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/components */ "./src/js/lib/modules/components.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/modal */ "./src/js/lib/modules/modal.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/lib/modules/tabs.js");










/*
MyLib v. 1.0

Main foo = $(selector);
What it is doing:
in $.prototype.init(selector) returns new $.prototype.init(selector);
in real work:
new $.prototype.init("selector") copies all methods of $.prototype;

All methods:
$("elem"). - Выбрать элемент по селектору или тэгу
.eq(num) - Выбрать объект под номером
.html("<></>")  - Добавить html структуру
.toggleClass("class") - тоглить класс
.addClass("class") - добавить класс
.removeClass("class") - убрать класс
.show() - показать элемент
.hide() - скрыть элемент
.toggle()  - тоглить элемент по display
.listenerAdd("event", callback) - добавить слушатель
.listenerRemove("event", callback) - убрать слушатель
.eq(selector) - первый элемент по порядку у всех подобных 
.index() - номер элемента  по порядку у всех подобных 
.find(selector) - все подобные по порядку у одного общего родителя
.closest(selector) - ближайший выше по иерархии элемент у всех в селекторе, если его нет, то он сам
.siblings() - все соседи элемента, кроме самого элемента
.fadeIn(duration=int, display, callback) - анимиция появления с requestAnimationFrame  через opacity
.fadeOut(duration=int, display, callback) - анимиция изчезания с requestAnimationFrame через opacity
*/

/* harmony default export */ __webpack_exports__["default"] = (_modules_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (index) {
  const swap = this[index];
  const thisLength = Object.keys(this).length; //remove all from this

  for (let i = 0; i < thisLength; i++) {
    delete this[i];
  } //add one with our index to this


  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children]; //callback

  const indexOfThis = item => {
    return item == this[0];
  }; //findIndex(callback) - pure js method


  return childs.findIndex(indexOfThis);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; //Всего

  let count = 0; //записанных в arr

  const copyOfThis = Object.assign({}, this);

  for (let i = 0; i < copyOfThis.length; i++) {
    const arr = copyOfThis[i].querySelectorAll(selector);

    if (arr.length === 0) {
      continue;
    }

    for (let i = 0; i < arr.length; i++) {
      this[count] = arr[i];
      count++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const thisLength = Object.keys(this).length;

  while (numberOfItems < thisLength) {
    numberOfItems++;
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let count = 0;

  if (selector) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].closest(selector) === null) {
        this[i] = this[i];
        count++;
      } else {
        this[i] = this[i].closest(selector);
        count++;
      }
    }

    const copyOfThis = Object.assign({}, this);

    while (count < copyOfThis) {
      count++;
      delete this[count];
    }
  } else {
    return this;
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0; //Всего

  let count = 0; //записанных в arr

  const copyOfThis = Object.assign({}, this);

  for (let i = 0; i < copyOfThis.length; i++) {
    const arr = copyOfThis[i].parentNode.children;

    for (let j = 0; j < arr.length; j++) {
      if (copyOfThis[i] === arr[j]) {
        continue;
      }

      this[count] = arr[j];
      count++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const thisLength = Object.keys(this).length;

  while (numberOfItems < thisLength) {
    numberOfItems++;
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(...classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/components.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/components.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");

const dropdown = `
<div class="dropdown mt-20">
    <button class="dropdown-btn btn btn-primary" id="dropdownMenuButton">
        dropdown btn
    </button>
    <div class="dropdown-menu" data-btn-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">item 1</a>
        <a href="#" class="dropdown-item">item 2</a>
        <a href="#" class="dropdown-item">item 3</a>
    </div>
</div>
`;
const card = `
<div class="card">
    <img src="https://blog.logrocket.com/wp-content/uploads/2020/10/deep-cloning-objects-javascript.png" alt="promo"
        class="card-img">
    <div class="card-body">
        <div class="card-tittle">Tittle 3</div>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsam?</p>
        <a href="" class="btn btn-dark">Link to</a>
    </div>
</div>
`;
const modalWindow = `
<div class="modal" id="exampleModal">
    <div class="modal-dialog">
    <div class="modal-content">
        <button class="close" data-close>
        <span>&times;</span>
        </button>
        <div class="modal-header">
        <div class="modal-tittle">
            Modal tittle
        </div>
        </div>
        <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dignissimos aliquid laborum rem temporibus
        dolorum aspernatur tempore deserunt eligendi voluptatum.
        </div>
        <div class="modal-footer">
        <button class="btn btn-danger" data-close>Close</button>
        <button class="btn btn-success">
            Save changes
        </button>
        </div>
    </div>
    </div>
</div>
`;

/***/ }),

/***/ "./src/js/lib/modules/core.js":
/*!************************************!*\
  !*** ./src/js/lib/modules/core.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  let newObj = new $.prototype.init(selector);
  return newObj;
};

$.prototype.init = function (selector) {
  //this = новый пустой объект, который наследует  прототип $ вместе с методом init
  if (!selector) {
    return this;
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return;
  }

  this.length = document.querySelectorAll(selector).length;
  Object.assign(this, document.querySelectorAll(selector));
  const resultObj = this;
  return resultObj;
};
/*Нужно чтобы новый объект который вернется в результате работы init() с новыми данными,
  работал со всеми старыми/новыми методами прототипа $*/


$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = '';
    }
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = 'none';
    }
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
};

/***/ }),

/***/ "./src/js/lib/modules/dropdown.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/dropdown.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).listenerAdd('click', e => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-btn-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-btn").dropdown();

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = 'none';
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/listeners.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/listeners.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.listenerAdd = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.listenerRemove = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/modal.js":
/*!*************************************!*\
  !*** ./src/js/lib/modules/modal.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target-id");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).listenerAdd('click', e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${target}`).fadeIn(500);
      document.body.style.overflow = "hidden";
    });
  }

  const closeTriggers = document.querySelectorAll('[data-close]');
  closeTriggers.forEach(elem => {
    elem.addEventListener('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').fadeOut(500);
      document.body.style.overflow = "";
    });
  });
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').listenerAdd('click', e => {
    if (e.target.classList.contains("btn-success")) {
      alert('Data send success!');
    }

    if (e.target.classList.contains('modal')) {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal').fadeOut(500);
      document.body.style.overflow = "";
    }
  });
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal(); //create modal window on trigger click 

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  // text = {text: tittle, text}
  btns // btns = {count: num, settings: [text, [classes], isClose, callback]}

} = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target-id').slice(1));
    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
          <div class="modal-content">
              <button class="close" data-close>
                  <span>&times;</span>
              </button>
              <div class="modal-header">
                  <div class="modal-title">
                      ${text.title}
                  </div>
              </div>
              <div class="modal-body">
                  ${text.body}
              </div>
              <div class="modal-footer">
                  
              </div>
          </div>
      </div>
      `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target-id')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/modules/tabs.js":
/*!************************************!*\
  !*** ./src/js/lib/modules/tabs.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/modules/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).listenerAdd("click", () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).siblings().removeClass("tab-active");
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass("tab-active");
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].closest(".tab")).find(".tab-content").removeClass("tab-content-active") // .addClass('')
      .eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass("tab-content-active");
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-tab-panel] .tab-item").tab();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map
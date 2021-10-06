const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) { // htmlElem
    this[0] = selector;
    this.length = 1;
    return;
  }

  this.length = document.querySelectorAll(selector).length;
  //запись массива в $.prototype
  Object.assign(this, document.querySelectorAll(selector));
  return this; // $.prototype
};
//запись return this; // $.prototype в init.prototype
$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;
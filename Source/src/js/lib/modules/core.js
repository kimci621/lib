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

export default $;
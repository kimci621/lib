import $ from "./core";

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

$.prototype.eq = function (index) {
  const swap = this[index];
  const thisLength = Object.keys(this).length;
  //remove all from this
  for (let i = 0; i < thisLength; i++) {
    delete this[i];
  }
  //add one with our index to this
  this[0] = swap;
  this.length = 1;
  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  //callback
  const indexOfThis = (item) => {
    return item == this[0];
  };
  //findIndex(callback) - pure js method
  return childs.findIndex(indexOfThis);
};

$.prototype.find = function (selector) {
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

$.prototype.closest = function (selector) {
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

$.prototype.siblings = function () {
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
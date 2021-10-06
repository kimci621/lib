import $ from "./core";
   
$.prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = '';
    }
  }
};

$.prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } else {
      this[i].style.display = 'none';
    }
  }
};

$.prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    } 

    if(this[i].style.display === 'none'){
      this[i].style.display = '';
    }else{
      this[i].style.display = 'none';
    }

  }
};

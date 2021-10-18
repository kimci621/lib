import $ from "./core";

$.prototype.accordion = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).listenerAdd('click', () => {
      $(this[i]).toggleClass("active");
      $(this[i].nextElementSibling).toggleClass("active");
    });
  }
};

$.prototype.accordionWithOne = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).listenerAdd('click', () => {
      $(this[i])
        .closest('.accordion-triggers')
        .find(".accordion-content")
        .removeClass("active")
        .eq(i).addClass("active");

      $(this[i])
        .closest('.accordion-triggers')
        .find(".accordion-trigger")
        .removeClass("active")
        .eq(i).addClass("active");
    });
  }
};



// $(".accordion-trigger").accordion();

$(".accordion-trigger").accordionWithOne();
import $ from "./core";

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');

    $(this[i]).listenerAdd('click', (e) => {
      $(`[data-btn-id="${id}"]`).fadeToggle(300);
    });
  }
};

$(".dropdown-btn").dropdown();
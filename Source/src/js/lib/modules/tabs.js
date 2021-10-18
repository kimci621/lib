import $ from "./core";

$.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).listenerAdd("click", () => {
      $(this[i]).siblings().removeClass("tab-active");
      $(this[i]).addClass("tab-active");

      $(this[i]
          .closest(".tab"))
        .find(".tab-content")
        .removeClass("tab-content-active")
        // .addClass('')
        .eq($(this[i]).index())
        .addClass("tab-content-active");
    });
  }


};

$("[data-tab-panel] .tab-item").tab();
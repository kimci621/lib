import $ from "./core";

$.prototype.carousel = function () {
  // this[i] = parent node of slides (main)
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesAll = this[i].querySelector('.carousel-slides');
    let offset = 0;
    let slideIndex = 0;
    const dots = this[i].querySelectorAll('.carousel-indicators li');

    slidesAll.style.width = 100 * slides.length + "%";

    slides.forEach(slide => {
      slide.style.width = width;
    });

    $(this[i].querySelector('.carousel-next')).listenerAdd('click', (e) => {
      e.preventDefault();

      if (offset === (+width.replace(/\D/g, '') * (slides.length - 1))) {
        offset = 0;
      } else {
        offset += (+width.replace(/\D/g, ''));
      }

      slidesAll.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      dots.forEach(dot => {
        dot.classList.remove("active");
      });
      dots[slideIndex].classList.add("active");
    });

    $(this[i].querySelector('.carousel-prev')).listenerAdd('click', (e) => {
      e.preventDefault();
      if (offset === 0) {
        offset = (+width.replace(/\D/g, '')) * (slides.length - 1);
      } else {
        offset -= (+width.replace(/\D/g, ''));
      }

      slidesAll.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      dots.forEach(dot => {
        dot.classList.remove("active");
      });
      dots[slideIndex].classList.add("active");
    });

    const sliderId = this[i].getAttribute('id');

    $(`#${sliderId} .carousel-indicators li`).listenerAdd('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = (+width.replace(/\D/g, '')) * slideTo;
      slidesAll.style.transform = `translateX(-${offset}px)`;

      dots.forEach(dot => {
        dot.classList.remove("active");
      });
      dots[slideIndex].classList.add("active");
    });

  }
};

$(".carousel").carousel();
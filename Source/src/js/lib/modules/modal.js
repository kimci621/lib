import $ from "./core";

$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target-id");
    $(this[i]).listenerAdd('click', (e) => {
      e.preventDefault();
      $(`#${target}`).fadeIn(500);
      document.body.style.overflow = "hidden";
    });
  }

  const closeTriggers = document.querySelectorAll('[data-close]');

  closeTriggers.forEach(elem => {
    elem.addEventListener('click', () => {
      $('.modal').fadeOut(500);
      document.body.style.overflow = "";
    });
  });

  $('.modal').listenerAdd('click', (e) => {
    if (e.target.classList.contains("btn-success")) {
      alert('Data send success!');
    }
    if (e.target.classList.contains('modal')) {
      $('.modal').fadeOut(500);
      document.body.style.overflow = "";
    }
  });
};

$('[data-toggle="modal"]').modal();

//create modal window on trigger click 
$.prototype.createModal = function ({
  text, // text = {text: tittle, text}
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
      if (btns.settings[j][3] && typeof (btns.settings[j][3]) === 'function') {
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
    $(this[i]).modal(true);
    $(this[i].getAttribute('data-target-id')).fadeIn(500);
  }
};
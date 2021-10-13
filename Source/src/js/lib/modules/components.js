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
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = "";
        }
    });
};

$('[data-toggle="modal"]').modal();


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
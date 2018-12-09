let uslugi = document.querySelector(".uslugi");
let modalBox = document.querySelector(".modal");
let opacity = document.querySelector(".opacity");


if (uslugi) {
    uslugi.addEventListener("click", activateModal);
}

function activateModal(event) {
    event.preventDefault();

    if (event.target.closest("a")) {
        modalBox.classList.add("modal--active");
        opacity.classList.add("opacity--active");
    }

    let modalClose = document.querySelector(".modal__close");

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
        opacity.addEventListener("click", closeModal);
    }
}


function closeModal(event) {
    event.preventDefault();
    modalBox.classList.remove("modal--active");
    opacity.classList.remove("opacity--active");
}
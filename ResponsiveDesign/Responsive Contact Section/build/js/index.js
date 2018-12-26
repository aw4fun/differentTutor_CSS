
let active = document.querySelector(".menu__btn");
    active.addEventListener("click", function (e) {
    e.preventDefault(); // отменяет стандартное событие, которое происходит при нажатии на ссылку =\
    active.classList.toggle("menu__btn-active");
});

let toggle = document.querySelector(".toggle");
let sidebar = document.getElementById("sidebar");

toggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});






















//
//
// let btn = document.querySelector(".btn");
// let menu = document.querySelector(".menu");
//     btn.addEventListener("click", () => {
//         menu.classList.toggle("show");
//     });
//
//
//
let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector("nav");


    menu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });



    $("ul li").click(function () {
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
    });

//
// let ulLi = document.querySelector("ul li");
//     ulLi.addEventListener("click", function () {
//         this.classList.toggle("active");
// });


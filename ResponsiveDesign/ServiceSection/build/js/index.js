$(document).ready(function () {
   $(".box").on("click", "li", function () {
       let tabsId = $(this).attr("id");
       $(this).addClass("active").siblings().removeClass("active");
       $("#" + tabsId + "-content-box").addClass("active").siblings().removeClass("active");
   })
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
// let box = document.querySelector(".box");
// let ul = document.querySelector("ul");
//
//     menu.addEventListener("click", function () {
//         ul.classList.toggle("active");
//         menu.classList.toggle("active");
//     });
//
// window.onload = function () {
//
// 	let menu = document.querySelector(".menu");
// 	let nav = document.querySelector("nav");
// 	let brand = document.querySelector("h3");
//
// 	menu.addEventListener("click", function () {
// 		nav.classList.toggle("active");
// 		brand.classList.toggle("unactive");
// 	})
// };


$(window).on("scroll", function () {
	if ($(window).scrollTop()) {
		$("nav").addClass("black");
	} else {
		$("nav").removeClass("black");
	}
});

$(document).ready(function () {
	let menu = document.querySelector(".menu");
	let ul = document.querySelector("nav ul");
	menu.addEventListener("click", function () {
		ul.classList.toggle("active");
	})
});
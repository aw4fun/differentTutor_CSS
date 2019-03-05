
(function () {
	let menu = document.querySelector(".toggle");
	let sidebar = document.querySelector(".sidebar");


	menu.addEventListener("click", function () {
		menu.classList.toggle("close");
		sidebar.classList.toggle("active");
	});
})();


let scrollTo = document.querySelector("ul>li");
let scrollGoal = document.querySelector("h1");

scrollTo.addEventListener("click", function () {
let scrollPoint = scrollGoal.getBoundingClientRect().top;


	window.scrollTo({
		top: scrollPoint,
		behavior: "smooth"
	});
});
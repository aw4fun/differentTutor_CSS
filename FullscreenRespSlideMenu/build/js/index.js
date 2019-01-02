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
// let menu = document.querySelector(".toggle");
// // let ul = document.querySelector("ul");
//
//     menu.addEventListener("click", function () {
//         // ul.classList.toggle("close");
//         menu.classList.toggle("close");
//     });


(function () {
	let menu = document.querySelector(".toggle");
	let sidebar = document.querySelector(".sidebar");


	menu.addEventListener("click", function () {
		menu.classList.toggle("close");
		sidebar.classList.toggle("active");
	});
})();
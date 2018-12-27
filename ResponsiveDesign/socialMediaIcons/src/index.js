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
// let ul = document.querySelector("ul");
//
// menu.addEventListener("click", function () {
// 	ul.classList.toggle("active");
// 	menu.classList.toggle("active");
// });

(setTimeout( () => {

	let a =	document.getElementsByTagName("a");

	for (let i = 0; i < a.length; i++) {
		a[i].addEventListener("click", (event) =>
				event.preventDefault()
			, false);
		}
	},50)
);

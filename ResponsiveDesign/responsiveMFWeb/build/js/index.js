//
// $("view-work").on("click", function () {
//
// 	const images = $("#images").position().top;
//
// 	$("html, body").animate(
// 		{
// 			scrollTop: images
// 		},
// 		900
// 	);
// });


window.onload = function () {
	let images = document.querySelector("#image");
	let view = document.querySelector("#view-work");

	view.addEventListener("click", function f() {


		window.scrollTo(images);
	});


};
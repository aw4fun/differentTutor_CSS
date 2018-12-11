
$(".btn").click(function () {
    $(".box").toggleClass("box-show");
});


// to view

$("#hex").keyup(function () {
    $(".prev").css("background", $("#hex").val());
});


// to apply

$(".apply").click(function () {
    $("body").css("background", $("#hex").val());

    // to hide the box

    $(".box").toggleClass("box-show");
});




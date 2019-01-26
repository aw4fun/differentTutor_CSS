let pictures = document.querySelectorAll(".slide-single");
let slider = [];

for (let i = 0; i < pictures.length; i++) {
    slider[i] = pictures[i].src;
    pictures[i].remove();
}



let step = 0;
let offset = 0;

function draw() {
    let img = document.createElement("img");
    img.src = slider[step];
    img.classList.add("slide-single");
    img.style.left = offset*512 + "px";
    document.querySelector("#slide").appendChild(img);
    step ++;

    if (step + 1 === slider.length) {
        step = 0
    } else {
        step++;
    }
    offset = 1;
}

function left() {

    document.removeEventListener("click", left);
    let pictures2 = document.querySelectorAll(".slide-single");
    let offset2 = 0;

    console.log("pictures", pictures2);

    for (let i = 0; i < pictures2.length ; i++) {
        pictures2[i].style.left = offset2 * 512 - 512 + "px";
        offset2++;
    }
    setTimeout(function () {
        pictures2[0].remove();
        draw();
        document.addEventListener("click", left);
    }, 1000)
}

draw();
draw();

document.addEventListener("click", left);
let startPoint = false;
let counter = 0;

let whatcher = function () {
    startPoint = true;
    let numberCounter = document.querySelector(".counter");
    let loading = document.querySelector(".skill_level1");
    counter = loading.style.width;

    document.querySelector(".stop").addEventListener("click", function () {
        return clearInterval(fix);
    });

    const fix = setInterval(function () {
         ++counter;
         numberCounter.innerHTML = counter + "%";
         loading.style.width = counter + "%";

        if (counter >= 100) {
            startPoint = false;
           return clearInterval(fix);
        }
        console.log("Hello");
    },100);
};

document.querySelector(".start").addEventListener("click", function () {
    if (startPoint) {
       return console.log("We are started !!!")
    }

    return whatcher();
});

document.querySelector("#x").addEventListener("click", function () {
   document.querySelector(".center").classList.add("closed");
});
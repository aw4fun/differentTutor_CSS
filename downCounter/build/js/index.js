let comingdate = new Date("Jan 1, 2019 00:00:00");

let d = document.getElementById("d");
let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

let x = setInterval(function () {
    let now = new Date();

    let des = comingdate.getTime() - now.getTime();
    let days = Math.floor(des/(1000*60*60*24));
    let hour = Math.floor(des%(1000*60*60*24)/(1000*60*60));
    let mins = Math.floor(des%(1000*60*60)/(1000*60));
    let secs = Math.floor(des%(1000*60)/1000);


    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hour);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);

    if (des <= 0) {
        clearInterval(x);
    }

},1000);





function getTrueNumber(x) {
    if (x<10){
        return "0" + x;
    } else  {
        return x
    }
}
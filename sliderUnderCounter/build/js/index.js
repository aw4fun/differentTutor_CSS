let range = document.querySelector(".number");
let rangeNum = document.querySelector(".range-num");

range.addEventListener(`drag`, function () {
});

range.addEventListener("input", function () {
  rangeNum.textContent = this.value;
  rangeNum.style.left = this.value - Math.floor((this.value - 170)/10) - 13 + "px";
});
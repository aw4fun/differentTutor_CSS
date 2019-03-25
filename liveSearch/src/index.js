let searchInput = document.querySelector("input");
let itemList = document.querySelectorAll("li");
let ul = document.querySelector("ul");

let itemContainer = Array.from(itemList);
console.log(itemContainer);


function sortListItem(data, target) {
  let sortData = data.map( item => {

  })
}



searchInput.addEventListener("input", (e) => {
  let inputValue = e.target.value.trim();
  if (inputValue !== "") {
    itemContainer.forEach( function (elem) {
      if (elem.innerText.search(inputValue) === -1) {
        elem.classList.add("hide")
      } else {
        elem.classList.remove("hide");
      }
    })
  } else {
    itemContainer.forEach(function (elem) {
      elem.classList.remove("hide");
    })
  }
});


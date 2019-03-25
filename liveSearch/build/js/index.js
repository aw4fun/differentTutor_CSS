let searchInput = document.querySelector("input");
let itemList = document.querySelectorAll("li");
let itemContainer = Array.from(itemList);

searchInput.addEventListener("input", (e) => {
  let inputValue = e.target.value.trim();
  if (inputValue !== "") {
    itemContainer.forEach( function (elem) {
      if (elem.innerText.search(inputValue) === -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        let str = elem.innerText; // вернет только текст, игнорирую внутренние теги
        elem.innerHTML = insertMark(str, elem.innerText.search(inputValue), inputValue.length );
      }
    })
  } else {
    itemContainer.forEach(function (elem) {
      elem.classList.remove("hide");
      elem.innerHTML = elem.innerText;
    })
  }
});

function insertMark(dataString, position, searchLength) {
  // privet medved
  // privet m<mark>ed</mark>ved
  // privet m + <mark> + ed + </mark> + ved
  return dataString.slice(0,position)
    + `<mark>` + dataString.slice(position, position + searchLength)
    + `</mark>` + dataString.slice(position + searchLength);
}
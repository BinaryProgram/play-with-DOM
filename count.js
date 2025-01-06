/*
we can handle click event two ways ->
*/

const cnt = document.getElementById("count");

// 1st method
let plus = 0;
function clickMe() {
  plus += 1;
  cnt.innerText = plus;
}

// 2nd method
const minusBtn = document.getElementById("minus-btn");
function minusFunction() {
  if (parseInt(cnt.innerText) !== 0) cnt.innerText -= 1;
}
minusBtn.addEventListener("click", minusFunction);

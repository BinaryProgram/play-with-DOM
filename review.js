let i = 1;
function review() {
  const text = document.getElementById("text-area");
  let paragraph = document.createElement("p");
  paragraph.innerText = i + ". " + text.value;
  const div = document.querySelector("#review");
  div.append(paragraph);
  text.value = " ";
  i++;
}

// when we click on submit btn a new paragraph will add in review section
document.getElementById("submit-btn").addEventListener("click", review);

// when we press Enter a new paragraph will add in review section
document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      review();
    }
  });

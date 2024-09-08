const dropDownButton = document.querySelector(".drop-down-button");
const dropDownMenu = document.querySelector(".drop-down");

dropDownButton.addEventListener("click", function () {
  if (dropDownButton.textContent === "Open Drop-Down") {
    dropDownMenu.style.visibility = "visible";
    dropDownButton.textContent = "Close Drop-Down";
  } else {
    dropDownMenu.style.visibility = "hidden";
    dropDownButton.textContent = "Open Drop-Down";
  }
});

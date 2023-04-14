const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeButtons = document.getElementsByClassName("close");

openModalButton.addEventListener("click", function () {
  modal.classList.add("show");
});

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    modal.classList.remove("show");
  });
}

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
});
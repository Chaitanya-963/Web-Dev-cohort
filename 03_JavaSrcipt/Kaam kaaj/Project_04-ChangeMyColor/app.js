let heading = document.querySelector("#mainHeading");
let colorBtn = document.querySelectorAll(
  "#redButton,#greenButton,#blueButton,#purpleButton"
);
let resetButton = document.querySelector("#resetButton");

colorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    heading.style.color = btn.textContent.toLowerCase();
  });
});

resetButton.addEventListener("click", () => {
  heading.style.color = "";
});

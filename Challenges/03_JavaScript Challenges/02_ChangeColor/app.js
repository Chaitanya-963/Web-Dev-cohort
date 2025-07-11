

const heading = document.getElementById("mainHeading");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const purpleButton = document.getElementById("purpleButton");
const resetButton = document.getElementById("resetButton");

function changeColor(colorBtn, resetBtn) {
  colorBtn.addEventListener("click", () => {
    const color = colorBtn.innerHTML;
    heading.style.color = color;
  });

  resetBtn.addEventListener("click", () => {
    heading.style.color = "";
  });
}

changeColor(redButton, resetButton);
changeColor(greenButton, resetButton);
changeColor(blueButton, resetButton);
changeColor(purpleButton, resetButton);
changeColor(resetButton, resetButton);





let inputs = document.querySelectorAll("#nameInput,#jobInput,#ageInput,#bioInput");



inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const display = document.querySelector(
      `#${input.id.replace("Input", "Display")}`
    );
    display.textContent = input.value.trim() || "Not provided";
  });
});

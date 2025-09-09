// let toggleBtn = document.querySelector("#toggleButton");
// let bulb = document.querySelector("#bulb");
// let body = document.querySelector("#body");
// let status = document.querySelector("#status");

// toggleBtn.addEventListener("click", function () {
//   if (bulb.classList.contains("off")) {
//     bulb.classList.toggle("off");
//     status.textContent = "Status: On";
//     toggleBtn.textContent = "Turn Off";
//     body.classList.add("dark-mode")
// } else {
//     bulb.classList.toggle("off");
//     status.textContent = "Status: Off";
//     toggleBtn.textContent = "Turn On";
//     body.classList.remove("dark-mode")
//   }
// });


const toggleBtn = document.querySelector("#toggleButton");
const bulb = document.querySelector("#bulb");
const body = document.querySelector("#body");
const status = document.querySelector("#status");

toggleBtn.addEventListener("click", () => {
  const isOff = bulb.classList.toggle("off");

  if (isOff) {
    status.textContent = "Status: Off";
    toggleBtn.textContent = "Turn On";
    body.classList.remove("dark-mode");
  } else {
    status.textContent = "Status: On";
    toggleBtn.textContent = "Turn Off";
    body.classList.add("dark-mode");
  }
});

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let emailErr = document.querySelector("#emailErr");
let passErr = document.querySelector("#passErr");
let resultMsg = document.querySelector("#resultmsg");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function showError(element, message) {
  element.textContent = message;
  element.style.display = message ? "block" : "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear result message
  resultMsg.textContent = "";

  let isValid = true;

  // Email validation
  if (!emailPattern.test(email.value)) {
    showError(emailErr, "Email is incorrect");
    isValid = false;
  } else {
    showError(emailErr, "");
  }

  // Password validation
  if (!passPattern.test(password.value)) {
    showError(passErr, "Password is incorrect");
    isValid = false;
  } else {
    showError(passErr, "");
  }

  // If valid, show success
  if (isValid) {
    resultMsg.textContent = "Form Submitted ✅";
    resultMsg.style.color = "green";
  }
});

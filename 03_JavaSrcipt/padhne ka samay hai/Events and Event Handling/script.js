let h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  h1.style.color = "red";
  h1.addEventListener("mouseleave", function () {
    h1.style.color = "black";
  });
});

let name = document.querySelector("#name");

name.addEventListener("input", function (e) {
  console.log("Typed: ", e.target.value);
});

let device = document.querySelector("#device");
let select = document.querySelector(".selection");

select.addEventListener("change", function (e) {
  device.textContent = `${e.target.value} device selected`;
});

let update = document.querySelector("#update");

window.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    update.textContent = "SPACE";
  } else {
    update.textContent = e.key;
  }
});

let fileinp = document.querySelector("#fileinp");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  fileinp.click();
  fileinp.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      btn.textContent = file.name;
    }
  });
});

let form = document.querySelector("form");
let inputs = document.querySelectorAll("form input");
let main = document.querySelector("#main");
let main2 = document.querySelector("#main2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let file = inputs[5].files[0];

  let img = document.createElement("img");
  img.setAttribute("src", URL.createObjectURL(file));

  let h2 = document.createElement("h2");
  h2.textContent = inputs[0].value;
  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = `${inputs[2].value} | ${inputs[3].value}`;
  let p = document.createElement("p");
  p.textContent = inputs[4].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main2.appendChild(card);
  form.reset();

  // console.log(card)
});

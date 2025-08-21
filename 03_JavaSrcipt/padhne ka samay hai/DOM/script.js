let h1 = document.querySelector("h1");
console.dir(h1);

h1.textContent = "Hello Chaitanya, How are you";

let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");

let hey = document.querySelector(".hey");
console.log(hey.getAttribute("href"));

hey.removeAttribute("href");

let h2 = document.createElement("h2");
h2.textContent = "Radhe Radhe";
document.body.appendChild(h2);

// h1.remove()

// h1.style.color = "red";
// h1.style.backgroundColor = "white"

h1.classList.add("change")

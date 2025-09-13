let parent = document.querySelector(".parent");

function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-black border border-slate-100"
    }  px-6 py-3 rounded shadow-lg pointer-events-none`;

    parent.appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
        parent.classList.add("items-end");
        parent.className += `${config.positionX === "right" ? " right-5" : "left-5"} ${config.positionY === "bottom" ? " bottom-5" : "top-5"}`
    }

    setTimeout(() => {
      parent.removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "dark",
  duration: 3,
});

toaster("I learned the closures");
setTimeout(() => {
  toaster("Make the next notification with timer");
}, 2000);
setTimeout(() => {
  toaster("Download Completed");
}, 1000);
setTimeout(() => {
  toaster("New Message from WhatsApp");
}, 4000);
setTimeout(() => {
  toaster("1 New Message");
}, 5000);
setTimeout(() => {
  toaster("Time up!");
}, 3000);
setTimeout(() => {
  toaster("Focus mood off");
}, 7000);

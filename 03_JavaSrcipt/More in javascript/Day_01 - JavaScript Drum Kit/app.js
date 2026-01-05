
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the normal
  audio.play();

  key.classList.toggle("playing");
  console.log(audio);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it not transforms

  this.classList.remove("playing");
  //   console.log(this);
}

const keys = document.querySelectorAll(".key");
console.log(keys);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

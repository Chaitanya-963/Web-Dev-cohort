function createClockNumbers() {
  const clock = document.querySelector(".clock");
  for (let i = 1; i <= 12; i++) {
    let number = document.createElement("div");
    number.classList.add("number");
    number.style.setProperty("--rotation", `${i * 30}deg`);
    number.innerHTML = `<span>${i}</span>`;
    clock.appendChild(number);
  }
}

function updateClock() {
  const now = new Date();

  // Keep numeric values for calculation
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Degrees for hands
  const secDeg = (seconds / 60) * 360;
  const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hrDeg = (hours % 12) * 30 + (minutes / 60) * 30;

  // Update hands
  document.querySelector(".hand.second").style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  document.querySelector(".hand.minute").style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  document.querySelector(".hand.hour").style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;

  // Digital clock with padded values
  const hoursDisplay = (hours % 12 || 12).toString().padStart(2, "0");
  const minutesDisplay = minutes.toString().padStart(2, "0");
  const secondsDisplay = seconds.toString().padStart(2, "0");

  document.querySelector(".digital-clock").textContent = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;

  // Date
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.querySelector(".date").textContent = now.toLocaleDateString(undefined, options);
}

createClockNumbers();
setInterval(updateClock, 1000);
updateClock();

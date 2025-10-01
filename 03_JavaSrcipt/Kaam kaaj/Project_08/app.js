// Array of images with captions
const images = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


// Select elements
const track = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const nav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let currentIndex = 0;
let autoPlayInterval = null;
let countdownTimer = null;
let countdown = 5; // seconds per slide

// Load images dynamically
images.forEach((img, index) => {
  const imageElement = document.createElement("img");
  imageElement.classList.add("carousel-slide");
  imageElement.src = img.src;
  imageElement.alt = img.caption;
  track.appendChild(imageElement);

  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  if (index === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToSlide(index));
  nav.appendChild(indicator);
});

// Update slide function
function updateSlide() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  caption.textContent = images[currentIndex].caption;

  // Update indicators
  document.querySelectorAll(".carousel-indicator").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Navigation
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
  resetTimer();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
  resetTimer();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
  resetTimer();
}

// Auto play logic
function startAutoPlay() {
  if (autoPlayInterval) return; // already running
  autoPlayButton.textContent = "Stop Auto Play";

  countdown = 5;
  updateTimerDisplay();

  countdownTimer = setInterval(() => {
    countdown--;
    updateTimerDisplay();
    if (countdown === 0) {
      nextSlide();
      countdown = 5;
    }
  }, 1000);
}

function stopAutoPlay() {
  autoPlayButton.textContent = "Start Auto Play";
  clearInterval(countdownTimer);
  countdownTimer = null;
  autoPlayInterval = null;
  timerDisplay.textContent = "";
}

function resetTimer() {
  if (countdownTimer) {
    countdown = 5;
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = `Next in: ${countdown}s`;
}

// Event listeners
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

autoPlayButton.addEventListener("click", () => {
  if (countdownTimer) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
});

// Pause on hover
track.addEventListener("mouseenter", stopAutoPlay);
track.addEventListener("mouseleave", startAutoPlay);

// Initialize
updateSlide();

let lazyImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("lazy-loaded");
        observer.unobserve(entry);
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
  }
);

lazyImages.forEach(function (img) {
  observer.observe(img);
});

const accordionButton = document.querySelectorAll(".accordion-button ");

accordionButton.forEach((item) => {
  item.addEventListener("click", function () {
    const accordionItem = item.parentElement;
    const content = item.nextElementSibling;

    accordionItem.classList.toggle("active");

    if (accordionItem.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });
});

const slideButtons = document.querySelectorAll(".slide-buttons-image");
const slides = document.getElementsByClassName("slides");
let timer;
showSlides();

slideButtons.forEach((button) => {
  button.addEventListener("click", showSlides);
});

function showSlides() {
  clearTimeout(timer);
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display === "none"
      ? (slides[i].style.display = "flex")
      : (slides[i].style.display = "none");
  }

  timer = setTimeout(showSlides, 5000);
}

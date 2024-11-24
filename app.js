const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
const slideIntervalTime = 3000;
let slideInterval;

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = currentIndex === slide.length - 1 ? 0 : currentIndex + 1;
  updateSlider();
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? slide.length - 1 : currentIndex - 1;
  updateSlider();
}

prev.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
  startAutoSlide();
});

next.addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
  startAutoSlide();
});

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, slideIntervalTime);
}

startAutoSlide();

function toggleMenu() {
  const links = document.querySelector(".links");
  links.classList.toggle("active");
}

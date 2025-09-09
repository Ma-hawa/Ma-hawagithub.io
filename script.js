const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");
const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
  let slides = carousel.querySelectorAll(".slide");
  let index = 0;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
  }

  carousel.parentElement.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  carousel.parentElement.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
});

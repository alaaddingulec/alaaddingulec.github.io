document.addEventListener("DOMContentLoaded", () => {
  // Menü aç-kapa
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".navbar ul");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Slider otomatik geçiş
  const slides = document.querySelectorAll(".slider .slide");
  let current = 0;
  setInterval(() => {
    if (slides.length > 0) {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }
  }, 4000);
});

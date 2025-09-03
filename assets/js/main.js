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

  // Typing effect
  const typingText = "Teknoloji · Yazılım · Otomasyon";
  let i = 0;
  function typeWriter() {
    if (i < typingText.length) {
      document.querySelector(".typing").innerHTML += typingText.charAt(i);
      i++;
      setTimeout(typeWriter, 120);
    }
  }
  typeWriter();

  // Scroll fade-in
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  });
});

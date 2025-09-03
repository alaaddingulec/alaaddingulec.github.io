document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if(toggle && menu){
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Dropdown for mobile (click-to-open)
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if(window.innerWidth <= 680 && e.target.closest('.nav-item')){
        item.classList.toggle('open');
      }
    });
  });

  // Hero slider
  const slides = Array.from(document.querySelectorAll('.hero-slider .slide'));
  const dotsWrap = document.querySelector('.hero-slider .dots');
  if(slides.length && dotsWrap){
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
    });
    let current = 0;
    function go(i){
      slides[current].classList.remove('active');
      dotsWrap.children[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      dotsWrap.children[current].classList.add('active');
    }
    function next(){ go((current + 1) % slides.length); }
    go(0);
    setInterval(next, 5000);
  }
});

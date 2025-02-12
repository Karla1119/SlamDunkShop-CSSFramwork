document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".framestrack");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let index = 0;
  
    function updateSlide() {
      const offset = -index * 100;
      track.style.transform = `translateX(${offset}%)`;
    }
  
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlide();
    });
  
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
    });
  
    // Cambio automático cada 3 segundos
    setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlide();
    }, 3000);
  });
  
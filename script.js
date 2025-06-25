
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = track.children;
    let index = 0;

    function showSlide(i) {
      track.style.transform = `translateX(-${i * 100}%)`;
    }

    carousel.querySelector('.next').addEventListener('click', () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    carousel.querySelector('.prev').addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  });
});

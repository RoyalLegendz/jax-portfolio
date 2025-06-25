
document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    let index = 0;
    const images = carousel.querySelectorAll("img");
    const total = images.length;

    function showSlide(i) {
      images.forEach((img, j) => {
        img.style.display = (i === j) ? "block" : "none";
      });
    }

    function nextSlide() {
      index = (index + 1) % total;
      showSlide(index);
    }

    showSlide(index);
    setInterval(nextSlide, 3000);
  });
});

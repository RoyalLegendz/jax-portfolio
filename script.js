
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

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      const videoId = this.getAttribute('data-id');
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      this.innerHTML = '';
      this.appendChild(iframe);
    });
  });
});

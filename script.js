document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.overlay-slider .images-container img');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slider = document.getElementById('imageRange');
  const fullscreen = document.getElementById('fullscreen');
  const fullscreenImg = document.getElementById('fullscreen-img');

  let currentIndex = 0;
  let autoSlideInterval;
  let isUserControlling = false;
  let resumeTimeout;

  function showImage(index) {
    currentIndex = index;
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    if (slider) slider.value = index;
  }

  function nextImage() {
    let nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }

  function prevImage() {
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      if (!isUserControlling) {
        nextImage();
      }
    }, 1500);
  }

  function pauseAutoSlide() {
    isUserControlling = true;
    clearInterval(autoSlideInterval);
    clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      isUserControlling = false;
      startAutoSlide();
    }, 2000);
  }

  prevBtn?.addEventListener('click', () => {
    prevImage();
    pauseAutoSlide();
  });

  nextBtn?.addEventListener('click', () => {
    nextImage();
    pauseAutoSlide();
  });

  slider?.addEventListener('input', (e) => {
    showImage(parseInt(e.target.value));
    pauseAutoSlide();
  });

  // Galeria - kliknięcia na obrazki (lightbox)
  document.querySelectorAll('.gallery img, .gallery-5 img, .modern-gallery img, .right-images img, .full-width-image, .image-box img').forEach(img => {
    img.addEventListener('click', () => {
      fullscreenImg.src = img.src;
      fullscreen.style.display = 'flex';
    });
  });

  fullscreen.addEventListener('click', () => {
    fullscreen.style.display = 'none';
    fullscreenImg.src = '';
  });

  // Obsługa linków w <nav>
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const index = link.getAttribute('data-index');
      const href = link.getAttribute('href');

      // Jeśli jest data-index, przełącz slider i zapobiegaj przeładowaniu
      if (index !== null) {
        e.preventDefault();
        showImage(parseInt(index));
        pauseAutoSlide();
        return;
      }

      // Jeśli href to link do obrazka, otwórz lightbox i zapobiegaj przeładowaniu
      if (href && href.match(/\.(jpeg|jpg|gif|png|svg)$/i)) {
        e.preventDefault();
        fullscreenImg.src = href;
        fullscreen.style.display = 'flex';
        return;
      }

      // W pozostałych przypadkach (np. str.html) nie blokujemy domyślnego działania linku
      // — pozwól przejść do innej strony normalnie
    });
  });

  showImage(currentIndex);
  startAutoSlide();

  window.addEventListener("load", () => {
    const nav = document.querySelector("nav");
    if (nav) nav.style.opacity = "1";
  });
});

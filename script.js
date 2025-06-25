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

  document.querySelectorAll('.gallery img, .gallery-5 img, .modern-gallery img, .right-images img, .full-width-image, .image-box img, .highlight-card img').forEach(img => {
    img.addEventListener('click', () => {
      fullscreenImg.src = img.src;
      fullscreen.style.display = 'flex';
    });
  });

  fullscreen.addEventListener('click', () => {
    fullscreen.style.display = 'none';
    fullscreenImg.src = '';
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const index = link.getAttribute('data-index');
      const href = link.getAttribute('href');

      if (index !== null) {
        e.preventDefault();
        showImage(parseInt(index));
        pauseAutoSlide();
        return;
      }

      if (href && href.match(/\.(jpeg|jpg|gif|png|svg)$/i)) {
        e.preventDefault();
        fullscreenImg.src = href;
        fullscreen.style.display = 'flex';
        return;
      }
    });
  });

  showImage(currentIndex);
  startAutoSlide();

  window.addEventListener("load", () => {
    const nav = document.querySelector("nav");
    if (nav) nav.style.opacity = "1";
  });

  // -----------------------------
  // ⬇⬇⬇ AUTOMATYCZNY SCROLL ROOM IMG (karuzela na dole) ⬇⬇⬇
  // -----------------------------
  const carousel = document.getElementById('carousel');

  setInterval(() => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft + 10 >= maxScrollLeft) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }, 4000);

  // -----------------------------
  // ⬇⬇⬇ WIDEO KARUZELA — przewijanie po zakończeniu filmu ⬇⬇⬇
  // -----------------------------
  const videos = document.querySelectorAll('#video-carousel video');
  const videoCarousel = document.querySelector('#video-carousel');
  let currentVideoIndex = 0;

  function showVideo(index) {
    videos.forEach((video, i) => {
      video.classList.toggle('active', i === index);
      if (i === index) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });

    // scrolluj video-carousel, jeśli wideo są obok siebie
    const scrollAmount = videos[0].offsetWidth;
    videoCarousel.scrollTo({ left: scrollAmount * index, behavior: 'smooth' });
  }

  // Dodaj nasłuchiwanie zakończenia filmu
  videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
      currentVideoIndex = (index + 1) % videos.length;
      showVideo(currentVideoIndex);
    });
  });

  showVideo(currentVideoIndex); // odpal pierwszy film
});

function scrollCarousel(offset) {
  const carousel = document.getElementById("video-carousel");
  if (!carousel) return;

  // Scrolluj
  carousel.scrollBy({
    left: offset,
    behavior: "smooth"
  });

  // Zatrzymaj wszystkie filmy
  const videos = carousel.querySelectorAll("video");
  videos.forEach(video => {
    video.pause();
  });

  // Poczekaj aż scroll się zakończy, potem odtwórz widoczny film
  setTimeout(() => {
    const carouselRect = carousel.getBoundingClientRect();

    let bestFit = null;
    let maxVisibleWidth = 0;

    videos.forEach(video => {
      const rect = video.getBoundingClientRect();
      const visibleWidth = Math.min(rect.right, carouselRect.right) - Math.max(rect.left, carouselRect.left);

      if (visibleWidth > maxVisibleWidth) {
        bestFit = video;
        maxVisibleWidth = visibleWidth;
      }
    });

    if (bestFit) {
      bestFit.currentTime = 0;
      bestFit.play();
    }
  }, 600); // Czas na zakończenie scrollowania (dostosuj do szybkości animacji)
}

let modalImages = [];
let modalCurrentIndex = 0;

function openModal(src) {
  modalImages = Array.from(document.querySelectorAll('#carousel img'));
  modalCurrentIndex = modalImages.findIndex(img => img.src.includes(src));

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = modalImages[modalCurrentIndex].src;
}

function scrollModalImage(direction, e) {
  e.stopPropagation(); // nie zamykaj modala

  if (!modalImages.length) return;

  modalCurrentIndex = (modalCurrentIndex + direction + modalImages.length) % modalImages.length;
  document.getElementById("modal-img").src = modalImages[modalCurrentIndex].src;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function scrollImageCarousel(offset) {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  carousel.scrollBy({
    left: offset,
    behavior: "smooth"
  });
}

function scrollCarouselById(id, amount) {
  const carousel = document.getElementById(id);
  if (carousel) {
    carousel.scrollBy({
      left: amount,
      behavior: "smooth"
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.scroll-arrow');
  if (arrow) {
    arrow.addEventListener('click', () => {
      const target = document.querySelector('.section-heading');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    arrow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const target = document.querySelector('.section-heading');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
});


  const btn  = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');

  // otwieranie / zamykanie
  btn.addEventListener('click', () => {
    menu.classList.toggle('active');   // pokaż/ukryj nav
    btn.classList.toggle('open');      // animuj ikonę
  });

  // zamknij menu po kliknięciu w link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      btn.classList.remove('open');
    });
  });


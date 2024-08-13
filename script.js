document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            const next = section.nextElementSibling;
            if (next) {
                next.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const prev = section.previousElementSibling;
            if (prev) {
                prev.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
    // Skrypty JavaScript, jakie masz obecnie
        window.onscroll = function() {toggleStickyHeader(), revealPhotos()};

        function toggleStickyHeader() {
            var header = document.querySelector('.sticky-header');
            var mainHeader = document.querySelector('.header');
            var headerHeight = mainHeader.offsetHeight;

            if (window.pageYOffset > headerHeight) {
                header.style.display = "block";
            } else {
                header.style.display = "none";
            }
        }

        function revealPhotos() {
            var photoFrames = document.querySelectorAll('.photo-frame');
            for (var i = 0; i < photoFrames.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = photoFrames[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    photoFrames[i].classList.add("visible");
                }
            }
        }

        // Pozostałe funkcje JavaScript
        function toggleTabs() {
            var tabs = document.querySelector('.tabs');
            tabs.classList.toggle('expanded');
        }

      function loadProjects() {
            location.href = 'portfolio.html';
        }

      

        function loadAbout() {
            location.href = 'omnie.html';
        }

          function refreshPage() {
            location.reload();
        }

        function loadPortfolio() {
             location.href = 'index.html';
            var portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                var topPosition = portfolioSection.offsetTop;
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        }

       function loadBlog() {
            location.href = 'blog.html';
        }

const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumb');
let currentIndex = 0;

function updateMainImage(index) {
    mainImage.src = thumbnails[index].src;
    document.querySelector('.thumb.active').classList.remove('active');
    thumbnails[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    updateMainImage(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    updateMainImage(currentIndex);
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage(index);
    });
});


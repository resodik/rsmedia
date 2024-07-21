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

        function loadProjects() {
            location.href = 'portfolio.html';
        }

        function loadBlog() {
            location.href = 'blog.html';
        }

        function loadAbout() {
            location.href = 'omnie.html';
        }

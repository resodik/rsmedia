window.onscroll = function() {revealPhotos()};

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

function toggleTabs() {
    var tabs = document.querySelector('.tabs');
    if (tabs.classList.contains('expanded')) {
        tabs.classList.remove('expanded');
        tabs.classList.add('collapsed');
    } else {
        tabs.classList.remove('collapsed');
        tabs.classList.add('expanded');
    }
}

function refreshPage() {
    location.reload();
}

function loadPortfolio() {
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

function goToPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            location.href = 'index.html';
            break;
        case 2:
            location.href = 'strona2.html';
            break;
        case 3:
            location.href = 'strona3.html';
            break;
        case 4:
            location.href = 'strona4.html';
            break;
        case 5:
            location.href = 'strona5.html';
            break;
        case 6:
            location.href = 'strona6.html';
            break;
        case 7:
            location.href = 'strona7.html';
            break;
        case 8:
            location.href = 'strona8.html';
            break;
        case 9:
            location.href = 'strona9.html';
            break;
        case 10:
            location.href = 'strona10.html';
            break;
        default:
            break;
    }
}

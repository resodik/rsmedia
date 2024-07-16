// Skrypt JavaScript
window.onscroll = function() {
    toggleStickyHeader();
};

function toggleStickyHeader() {
    var header = document.querySelector('.sticky-header');
    var mainImage = document.querySelector('.main-image');

    if (window.pageYOffset > mainImage.offsetHeight) {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
}

// Pozostałe funkcje JavaScript
function refreshPage() {
    location.reload();
}

// Funkcje do nawigacji, ładowania stron, itp.
function loadPortfolio() {
    location.href = 'portfolio.html';
}

function loadProjects() {
    location.href = 'projects.html';
}

function loadBlog() {
    location.href = 'blog.html';
}

function loadAbout() {
    location.href = 'about.html';
}

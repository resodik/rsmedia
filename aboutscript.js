document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Dzięki za zainteresowanie! Zakup będzie dostępny wkrótce.');
  });
});



// Hamburger menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.top-nav-links').classList.toggle('open');
});

// Scroll strzałką
document.querySelector('.scroll-arrow').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.scroll-arrow').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector('.scroll-to-figures').addEventListener('click', (e) => {
  e.preventDefault(); // zapobiega domyślnemu zachowaniu linku
  document.querySelector('#roadmap').scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.scroll-to-figures').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    document.querySelector('#figures').scrollIntoView({ behavior: 'smooth' });
  }
});


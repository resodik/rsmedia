const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.media-frame img').forEach(image => {
  image.addEventListener('load', () => image.closest('.media-frame').classList.add('has-image'));
  image.addEventListener('error', () => image.remove());
});

document.querySelectorAll('.video-card').forEach(card => {
  const video = card.querySelector('video');
  const playButton = card.querySelector('.video-play');
  playButton.addEventListener('click', () => {
    video.controls = true;
    video.play().catch(() => {});
  });
  video.addEventListener('play', () => { playButton.hidden = true; });
  video.addEventListener('ended', () => {
    video.controls = false;
    playButton.hidden = false;
  });
});

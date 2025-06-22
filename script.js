function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

document.getElementById('home-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('main-title').textContent = "S.R Tailor's";
});


  window.addEventListener('load', () => {
    autoScrollGallery('.scroll-gallery:nth-of-type(1)', 1); // Shirts
    autoScrollGallery('.scroll-gallery:nth-of-type(2)', 1); // Pants
  });
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');
const nav_a = document.querySelectorAll('nav a');
console.log(nav_a);

openMenu.addEventListener('click', () => {
  navLinks.classList.remove('hidden');
  openMenu.classList.add('hidden');
  closeMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.add('hidden');
  closeMenu.classList.add('hidden');
  openMenu.classList.remove('hidden');
});



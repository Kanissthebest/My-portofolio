const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');
const nav_a = document.querySelectorAll('nav a');

// Gérer le menu mobile
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

// Gérer le style actif du lien de navigation
function setActiveLink() {
  // Récupérer le nom du fichier actuel
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Retirer la classe active de tous les liens
  nav_a.forEach(link => {
    link.classList.remove('active');
  });

  // Ajouter la classe active au lien correspondant
  nav_a.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Appeler la fonction au chargement de la page
setActiveLink();



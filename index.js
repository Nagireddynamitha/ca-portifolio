// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i> Theme';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark';
  }
});

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-bar-icone');
const navbar = document.querySelector('.navbar-container');

menuIcon.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll Reveal Animation
ScrollReveal().reveal('.service-card, .project-card', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  interval: 100
});

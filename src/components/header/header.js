import './header.scss';
import '../buttons/button/button.js';


let navBarToggle = document.querySelectorAll('.navbar__toggle');

if (navBarToggle) {
  navBarToggle.forEach(toggleButton => toggleButton.addEventListener('click', function () {
    const parent =  this.closest('.navbar');
    const navbar = parent.querySelector('.navbar__main-nav');
    navbar.classList.toggle('navbar__main-nav_active');
  }));
}
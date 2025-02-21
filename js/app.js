//hamburger menu
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav_links');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});


const hamburger = document.querySelector('.hamburger_image');
const navMenu = document.querySelector('.nav__menu');
const navBar = document.querySelector('.nav__bar');
const carousel = document.querySelector('.carousel');

console.log(navBar);

hamburger.addEventListener('click', () => {
    if (hamburger.getAttribute('src').includes('menu.svg')) {
        hamburger.setAttribute('src', '/Images/close.svg')
        navMenu.classList.toggle('active');
        navBar.classList.toggle('active');
        carousel.style.zIndex = -1;
        
    } else {
        hamburger.setAttribute('src', '/Images/menu.svg');
        navMenu.classList.toggle('active');
        navBar.classList.toggle('active');
        carousel.style.zIndex = 1;
    }
});

document.querySelectorAll('.nav__item').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.setAttribute('src', '/Images/menu.svg');
        navMenu.classList.remove('active');
        navBar.classList.remove('active');
        carousel.style.zIndex = 1;
    })
});




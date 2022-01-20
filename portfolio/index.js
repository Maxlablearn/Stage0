const hamburgerLogo = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.navigation')

function toggleMenu() {
    hamburgerLogo.classList.toggle('open');
    hamburgerMenu.classList.toggle('show');
}

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        hamburgerMenu.classList.remove('show');
        hamburgerLogo.classList.remove('open');
    }
}

hamburgerLogo.addEventListener('click', toggleMenu);
hamburgerMenu.addEventListener('click', closeMenu);

console.log(`Вёрстка соответствует макету (+-10px)на ширине экрана 768px - 48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки - 15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню - 22\nСуммарно - 75`);

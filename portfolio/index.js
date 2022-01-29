import i18Obj from './translate.js';


const hamburgerLogo = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.navigation');

function toggleMenu() {
    hamburgerLogo.classList.toggle('open');
    hamburgerMenu.classList.toggle('show');
    document.body.classList.toggle('lock');
}

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        hamburgerMenu.classList.remove('show');
        hamburgerLogo.classList.remove('open');
        document.body.classList.remove('lock');
    }
}
hamburgerLogo.addEventListener('click', toggleMenu);
hamburgerMenu.addEventListener('click', closeMenu);


const portfolioButton = document.querySelectorAll('.portfolio-button');
const portfolioButtons = document.querySelector('.portfolio-buttons');
const portfolioImages = document.querySelectorAll('.portfolio-image');
function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
        portfolioButton.forEach((elem) => elem.classList.remove('active'));
        event.target.classList.add('active');
    }
}
portfolioButtons.addEventListener('click', changeImage);


const langButtons = document.querySelector('.language');
const langButton = document.querySelectorAll('.language-button');
const textArea = document.querySelectorAll('[data-i18n]');

function getTranslate(event) {
    let language = event.target.dataset.lang
    textArea.forEach(elem => elem.textContent = i18Obj[language][elem.dataset.i18n]);
    langButton.forEach(elem => elem.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
};
langButtons.addEventListener('click', getTranslate);

console.log(`Вёрстка соответствует макету (+-10px)на ширине экрана 768px - 48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки - 15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню - 22\nСуммарно - 75`);

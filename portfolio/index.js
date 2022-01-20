const hamburgerLogo = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.navigation');
function toggleMenu() {
    hamburgerLogo.classList.toggle('open');
    hamburgerMenu.classList.toggle('show');
}
hamburgerLogo.addEventListener('click', toggleMenu);
hamburgerMenu.addEventListener('click', toggleMenu);
console.log(`Вёрстка соответствует макету(+-10px). Ширина экрана 768px - 48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки - 15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню - 22\nСуммарно - 75`);

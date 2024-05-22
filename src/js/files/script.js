// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// перенос кнопки бургера

const headerBody = document.querySelector('.header__body');
const burgerBtn = document.querySelector('.menu__icon');
const menuLabel = document.querySelector('.header__menu-label');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function () {
    headerBody.classList.toggle('header__body-reverse');
    menuLabel.classList.toggle('hide');
  });
}

// mobile menu
const dropdown = document.querySelectorAll('.dropdown');

if (dropdown) {
  dropdown.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      link.classList.toggle('dropdown-active');
      link.children[1].classList.toggle('sub-active');
    });
  });
}

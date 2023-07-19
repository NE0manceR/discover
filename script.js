const burder_btn = document.querySelector('.header__burder-btn');
const mobile_menu = document.querySelector('.mobile-menu');
const black_bcg = document.querySelector('.black-bcg');
const menu__close_btn = document.querySelector('.mobile-menu__close-btn');

burder_btn.addEventListener('click', showMenu);

menu__close_btn.addEventListener('click', closeMenu);

function showMenu() {
    mobile_menu.style.display = 'flex';
    black_bcg.style.display = 'block';
}

function closeMenu() {
    mobile_menu.style.display = 'none';
    black_bcg.style.display = 'none';
}


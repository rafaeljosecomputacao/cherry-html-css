/* Menu mobile responsive */

function menuShow() {
    let menuMobile = document.querySelector('.navbar-mobile-menu');
    
    if (menuMobile.classList.contains('navbar-mobile-menu-open')) {
        menuMobile.classList.remove('navbar-mobile-menu-open');
        document.querySelector('.navbar-mobile-icon').src = "../img/menu.svg";
    } else {
        menuMobile.classList.add('navbar-mobile-menu-open');
        document.querySelector('.navbar-mobile-icon').src = "../img/close.svg";
    }
}

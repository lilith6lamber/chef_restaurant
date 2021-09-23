'use strict';

function drawNav() {
    const trigger = document.querySelector('.header_navbar-action_hamburger');
    const menu = document.querySelector('.header_nav');
    const menuLinks = document.querySelectorAll('.header_nav-list_item');

    function close() {
        trigger.classList.remove('active');
        menu.classList.remove('active');
    }

    trigger.addEventListener('click', () => {
        trigger.classList.toggle('active');
        menu.classList.toggle('active');
    })
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            close();
        })
    })
}

export default drawNav;
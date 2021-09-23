import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';

import initLoader from './modules/loader';
import drawNav from './modules/nav';
import initSlider from './modules/slider';
import { validateSubcribition } from './modules/forms';

initLoader();

document.addEventListener('DOMContentLoaded', () => {
    const lazyload = new LazyLoad();
    new WOW().init();

    drawNav();

    initSlider({
        container: '.menu_slider',
        controlsContainer: '.menu_slider-controls',
        loop: true,
        responsive: {
            576: {
                gutter: 10,
                items: 2,
                adaptiveHeight: true
            },
            992: {
                items: 3,
                gutter: 30
            }
        }
    });

    validateSubcribition('.footer_form', '.footer_form-field');
});
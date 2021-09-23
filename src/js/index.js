import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';

import {validateSubcribition} from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {
    const lazyload = new LazyLoad();
    new WOW().init();

    validateSubcribition('.footer_form', '.footer_form-field');
});
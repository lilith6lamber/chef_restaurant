'use strict';

import { tns } from "tiny-slider/src/tiny-slider";

function initSlider(settings) {
    const sliderDefaults = {
        mode: 'carousel',
        items: 1,
        nav: false,
        loop: false
    };
    let slider = tns({
        ...sliderDefaults,
        ...settings
    });
}

export default initSlider;
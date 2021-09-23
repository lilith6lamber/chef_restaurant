'use strict';

function initLoader() {
    const wait = (delay = 0) =>
        new Promise(resolve => setTimeout(resolve, delay));

    const setVisible = (selector, visible) => {
        selector = document.getElementById(selector);
        if (visible) {
            selector.classList.add("visible");
            document.documentElement.style.overflowY = 'hidden';
        } else {
            selector.classList.remove("visible");
            document.body.classList.add("visible");
            document.documentElement.style.overflowY = 'visible';
        }
    }

    setVisible('loadingScreen', true);

    document.addEventListener('DOMContentLoaded', () =>
        wait(1200).then(() => {
            setVisible('loadingScreen', false);
        }));
}

export default initLoader; 
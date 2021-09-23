'use strict';

import drawNotification from './notification';

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function validateSubcribition(formSelector, fieldSelector) {
    const formElem = document.querySelector(formSelector);
    const inputsArr = document.querySelectorAll(fieldSelector);

    const success = {
        title: "Your coupon is waiting for you!",
        html: `
            <p class="main">If you don't see any check your spam folder.'</p>`,
        showCloseButton: true,
        customClass: {
            popup: 'subscribe_popup',
            title: 'subscribe_popup-title',
            htmlContainer: 'subscribe_popup-content',
            closeButton: 'subscribe_popup-close'
        }
    };

    formElem.addEventListener('submit', (e) => {
        e.preventDefault();

        for (let i = 0; i < inputsArr.length; i++) {
            const el = inputsArr[i];
            const value = el.value;
            if (el.classList.contains('required') && value === '') {
                el.classList.add('error');
            } else if (el.dataset.type === 'email' && !emailRegExp.test(value)) {
                el.classList.add('error');
            } else {
                el.classList.remove('error');
                el.value = '';
                drawNotification(success);
            }

            el.addEventListener('input', () => {
                el.classList.remove('error');
            });
        }
    });
}
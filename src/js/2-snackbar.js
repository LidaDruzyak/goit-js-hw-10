import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

'use strict';
// const input = document.querySelector('[type="number"]');
const form = document.querySelector('form');
const btn = document.querySelector('[type="submit"]');
const fulfilledInput = document.querySelector('input[value="fulfilled"]');
const rejectedInput = document.querySelector('input[value="rejected"]');



function handleSubmit(event) {
    event.preventDefault();
    event.target;
    const formData = new FormData(form);
    const delay = formData.get("delay");
    const state = formData.get("state");

    form.reset();
   
    function createPromise(delay,) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === "fulfilled") {
                    resolve(`✅ Fulfilled promise in ${delay}ms`);
                } else {
                    reject(`❌ Rejected promise in ${delay}ms`);
                }
            }, delay);
        });
    }
    if(isNaN(delay) || delay <= 0) {
        iziToast.show({
            title: 'ERROR:',
            titleColor: 'black',
            message: 'the entry is invalid',
            position: 'topRight',
            backgroundColor: '#ef4040',
            closeOnClick: true,
            closeOnEscape: true,
        });
        return;
    }


 const promise = createPromise(delay);

promise.then(message => {
    iziToast.show({
        title: 'OK',
        titleColor: 'green',
        message: message,
        position: 'topRight',
        backgroundColor: '#59a10d',
        closeOnClick: true,
        closeOnEscape: true,
    });
})
.catch(error => {
    iziToast.show({
        title: 'ERROR',
        titleColor: 'black',
        message: error,
        position: 'topRight',
        backgroundColor: '#ef4040',
        closeOnClick: true,
        closeOnEscape: true,
    });
});
}
form.addEventListener('submit', handleSubmit);
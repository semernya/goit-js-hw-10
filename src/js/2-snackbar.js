import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const timeInput = document.querySelector('input[type=number]');
const radioBtns = document.querySelectorAll('input[type=radio]');

form.addEventListener('submit', createPromiseOnSubmit);

function createPromiseOnSubmit(event) {
  event.preventDefault();
  const dataForm = new FormData(event.target);
  const state = dataForm.get('state');
  const timeByUser = timeInput.value;

  const promise = new Promise((resolve, reject) => {
    // console.log(timeByUser);
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(timeByUser);
      }, timeByUser);
    } else {
      setTimeout(() => {
        reject(timeByUser);
      }, timeByUser);
    }
  });

  promise
    .then(value => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${timeByUser}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        message: `❌ Rejected promise in ${timeByUser}ms`,
      });
    });
}

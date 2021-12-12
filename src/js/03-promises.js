import Notiflix from 'notiflix';
let delay = document.querySelector('input[name=delay]');
let step = document.querySelector('input[name=step]');
let amount = document.querySelector('input[name=amount');
let button = document.querySelector('button[type=submit]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
}
function makePromise() {
  let time = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, time)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    time += Number(step.value);
  }
}

button.addEventListener('click', makePromise);
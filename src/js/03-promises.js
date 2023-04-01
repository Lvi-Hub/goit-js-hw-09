import Notiflix from 'notiflix';
const ref = {
  formEl: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};
//console.log(ref.firstDelay.value);
//--

ref.formEl.addEventListener(`submit`, readData);
//--

function readData(e) {
  e.preventDefault();
  let delay = Number(ref.firstDelay.value);
  const step = Number(ref.delayStep.value);
  const amount = Number(ref.amount.value);
  //console.log(delay, step, amount);

  for (let i = 1; i <= amount; i += 1) {
    //console.log(i);
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(position, delay);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(position, delay);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

//--
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        console.log({ position, delay });
      } else {
        reject({ position, delay });
        console.log({ position, delay });
      }
    }, delay);
  });
}

const ref = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyStyleEl: document.querySelector('body'),
};
let timerId = null;
ref.btnStop.disabled = true;
//--Inline styles
ref.btnStart.style.marginTop = '300px';
ref.btnStart.style.marginLeft = '150px';
ref.btnStart.style.marginRight = '50px';
ref.btnStart.style.width = '100px';
ref.btnStart.style.height = '50px';
ref.btnStart.style.borderRadius = '5px';
//--
ref.btnStop.style.height = '50px';
ref.btnStop.style.width = '100px';
ref.btnStop.style.borderRadius = '5px';

//-- Button START
ref.btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    ref.bodyStyleEl.style.backgroundColor = getRandomHexColor();
    ref.btnStart.disabled = true;
    ref.btnStop.disabled = false;
    console.log(getRandomHexColor());
  }, 1000);
});

//-- Button STOP
ref.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  ref.btnStart.disabled = false;
  ref.btnStop.disabled = true;
  console.log(`Interval with id ${timerId} has stopped!`);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

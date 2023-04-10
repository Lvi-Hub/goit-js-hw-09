import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
//--
let clickedDate = null;
const ref = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  btnStart: document.querySelector('[data-start]'),
};
ref.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    clickedDate = selectedDates[0];
    if (clickedDate < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      ref.btnStart.disabled = false;
    }
  },
};
ref.btnStart.addEventListener('click', () => {
  timer.start();
});
//--
flatpickr('#datetime-picker', { ...options });
//--

//--
const timer = {
  start() {
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltatime = clickedDate - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltatime);
      // console.log(`${days}:${hours}:${minutes}:${seconds}`);
      // console.log(options.inputClick);
      ref.days.textContent = `${days}`;
      ref.hours.textContent = `${hours}`;
      ref.minutes.textContent = `${minutes}`;
      ref.seconds.textContent = `${seconds}`;
      console.log(ref.seconds.textContent);
      if (deltatime < 1000) {
        clearInterval(timerId);
      }
      console.log(deltatime);
    }, 1000);
  },
};
//--
//--
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
//--
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

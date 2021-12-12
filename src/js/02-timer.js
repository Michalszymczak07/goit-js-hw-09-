// Opisany w dokumentacji
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const span = document.querySelectorAll('.value');
const dayValue = span[0];
const hourValue = span[1];
const minutesValue = span[2];
const secondsValue = span[3];
let chosenDate;
let timer;

let button = document.querySelector('button')
let today = new Date();



let input = document.querySelector('input')

let timeDisplay = document.querySelector('.timer').style.display="flex";
let timeDisplay2 = document.querySelector('.timer').style.justifyContent = "space-around"



button.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    chosenDate = selectedDates[0];
    if (selectedDates[0] < today) {
      Notiflix.Notify.failure('Please choose a date in the future')
      
    } else if (selectedDates[0] > today) {
      button.disabled = false;
    }

  },
};
flatpickr(input, options, {

});










function x (){
  setInterval((ms) => {
    let today = new Date().getTime();
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    ms = chosenDate - today;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);


    dayValue.innerHTML = days;
    hourValue.innerHTML = hours;
    minutesValue.innerHTML = minutes;
    secondsValue.innerHTML = seconds;

    console.log(ms);
   
    function addLeadingZero() {
      let dayZero = dayValue.innerHTML.padStart(2, '0');
      let hourZero = hourValue.innerHTML.padStart(2, '0');
      let minutesZero = minutesValue.innerHTML.padStart(2, '0');
      let secondsZero = secondsValue.innerHTML.padStart(2, '0');

      dayValue.innerHTML = dayZero;
      hourValue.innerHTML = hourZero;
      minutesValue.innerHTML = minutesZero;
      secondsValue.innerHTML = secondsZero;
    }
    addLeadingZero();
  }, 1000)
}
button.addEventListener('click', x)








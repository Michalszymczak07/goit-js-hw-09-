
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let myInterval

let buttons = document.querySelectorAll('button');
let startButton = buttons[0]
let stopButton = buttons[1]
function interval() {
   myInterval = setInterval(function changeBg() {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startButton.disabled = true;
    stopButton.disabled = false;
}
function myStopFunction() {
    clearInterval(myInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}
startButton.addEventListener('click', interval);
stopButton.addEventListener('click', myStopFunction)


const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const millesecondsEl = document.getElementById('milleseconds')

setInterval(() => {
  let milleseconds = parseInt(millesecondsEl.textContent)
  let seconds = parseInt(secondsEl.textContent)
  let minutes = parseInt(minutesEl.textContent)
  let hours = parseInt(hoursEl.textContent)

  if(milleseconds > 0){
    milleseconds--
  } else if (seconds > 0) {
    milleseconds = 59
    seconds--
  } else if (minutes > 0) {
    milleseconds = 59
    seconds = 59
    minutes --
  } else {
    milleseconds = 59
    seconds = 59
    minutes = 59
    hours --
  }

  millesecondsEl.textContent = milleseconds.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');

}, 1);

function toggleVisibilityOfModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('invisible')
}

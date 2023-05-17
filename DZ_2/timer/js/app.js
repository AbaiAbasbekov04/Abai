
// Получаем элемент таймера
const timerElement = document.getElementById('timer');
const imfor = document.getElementById('imfor');

const totalMinutes = 5;

const totalSeconds = totalMinutes * 60;

let secondsElapsed = 0;
let minutesElapsed = 0;

function updateTimer() {
  secondsElapsed++;

  if (secondsElapsed === 60) {
    secondsElapsed = 0;
    minutesElapsed++; 
  }
  if (minutesElapsed > 0) {
    imfor.textContent = `Прошла ${minutesElapsed} минута`;
  }
  timerElement.textContent = `${formatTime(minutesElapsed)}:${formatTime(secondsElapsed)}`;

  if (minutesElapsed === totalMinutes) {
    clearInterval(interval);
    imfor.textContent = 'Таймер завершен';
  }
  

}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

const interval = setInterval(updateTimer, 1000);


let startTime;
let running = false;
let intervalId;

const timeLabel = document.getElementById('timeLabel');
const datePicker = document.getElementById('datePicker');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

async function startTimer() {
    if (!running) {
        startTime = Date.now();
        running = true;
        intervalId = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(intervalId);
    }
}

function resetTimer() {
    stopTimer();
    timeLabel.textContent = '00:00:00';
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');

    timeLabel.textContent = `${hours}:${minutes}:${seconds}`;
}

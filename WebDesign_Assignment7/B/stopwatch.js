document.addEventListener('DOMContentLoaded', () => {
    const timerLabel = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');
    const datePicker = document.getElementById('datePicker');

    
    const currentDate = new Date().toISOString().split('T')[0];
    datePicker.value = currentDate;

    let intervalId;
    let startTime;
    let pausedTime = 0;

    const updateTime = () => {
        const elapsedTime = Date.now() - startTime + pausedTime;
        const hours = Math.floor(elapsedTime / 3600000);
        const minutes = Math.floor((elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        timerLabel.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    };

    const startTimer = () => {
        startTime = Date.now();
        intervalId = setInterval(updateTime, 1000);
        startBtn.disabled = true;
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        pausedTime += Date.now() - startTime;
        startBtn.disabled = false;
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        timerLabel.textContent = '00:00:00';
        pausedTime = 0;
        startBtn.disabled = false;
    };

    const padZero = (num) => {
        return num < 10 ? '0' + num : num;
    };

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
});

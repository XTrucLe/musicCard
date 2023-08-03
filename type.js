var countdownInterval;
const setTime = 180;
var secondsRemaining = setTime; // Thời gian đếm ngược (giây)
var isCountingDown = false;
const playButton = document.querySelector('.playButton');

function toggleCountdown() {
    if (isCountingDown) {
        stopCountdown();
        playButton.classList.remove('active');
        clearTimeout(setProgressBar);
    } else {
        startCountdown();
        playButton.classList.add('active');
        setTimeout(setProgressBar, 100);
    }
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds.toString().padStart(2, "0")}`;
}
function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
    isCountingDown = true;
}
function stopCountdown() {
    clearInterval(countdownInterval);
    isCountingDown = false;
}
function updateCountdown() {
    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = formatTime(secondsRemaining);

    if (secondsRemaining <= 0) {
        clearInterval(countdownInterval);
        resetCountdown();
    } else {
        secondsRemaining--;
    }
}
function resetCountdown() {
    secondsRemaining = setTime;
    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = '';
}

// love song button
const loveBtn = document.querySelector('.loveSong');
var likeCount = 0;
loveBtn.addEventListener("click", () => {
    likeCount++;
    if (likeCount < 2) {
        loveBtn.classList.add('active');
    }
    else {
        loveBtn.classList.remove('active');
        likeCount = 0;
    }
});

function setProgressBar() {
    const valueProgress = document.querySelector('#progressBar');
    let current_value = parseInt(valueProgress.getAttribute("aria-valuenow"));
    if (current_value > 100) {
        return;}
        else{
        // current_value = countdownInterval / secondsRemaining;
        current_value++
        console.log(current_value)
        const progressBar=document.getElementById('#progressBar')
        progressBar.ariaValueNow= current_value;
        // progressBar.textContent = 'Hoàn thành ' + current_value + ' %';
        // progressBar.style.width = current_value + '%';
    }

}
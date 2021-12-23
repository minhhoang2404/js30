const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filler');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let check = true;

function togglePlay() {
    if (check) {
        video.play();
        check = false;
        toggle.textContent = 'stop';
    } else {
        video.pause();
        check = true;
        toggle.textContent = 'play';
    }
}

function setRange() {
    console.log(this.value);
    if (this.name === "volume") {
        video.volume = this.value;
    } else {
        video.playbackRate = this.value;
    }
}

function skipData() {
    console.log(this.value);
    video.currentTime = video.currentTime + Number(this.value);
    console.log(video.currentTime);
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('input', setRange))
skipButton.forEach(skip => skip.addEventListener('click', skipData))



const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, Audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
        })
}
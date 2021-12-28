window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const word = document.querySelector('.words');
word.appendChild(p);

recognition.addEventListener('results', e => {
    const transcript = Array.from(e.results).map(result => result[0])
        .map(result => result.transcript).join('');
    console.log(transcript);
    console.log("abc");
})

navigator.geolocation.watchPosition((data) => {
    console.log(data);
})
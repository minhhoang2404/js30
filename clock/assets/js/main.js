const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

console.log(secondHand);
function setDate() {
    const now = new Date();
    const secondsDes = (now.getSeconds() / 60) * 360;
    const minDes = (now.getMinutes() / 60) * 360;
    const hourDes = (now.getHours() / 12) * 360;
    console.log(now.getHours())
    console.log(now.getMinutes())
    console.log(now.getSeconds())

    secondHand.style.transform = `rotate(${secondsDes}deg)`;
    minHand.style.transform = `rotate(${minDes}deg)`;
    hourHand.style.transform = `rotate(${hourDes}deg)`;
    console.log(secondHand.style.transform)
}
setInterval(setDate, 1000);

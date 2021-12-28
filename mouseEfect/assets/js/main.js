const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    var { x = e.offsetX, y = e.offsetY } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // console.log(xWalk, yWalk);

    console.log(text.style);
    text.style.textShadow = `${xWalk}px ${yWalk}px 3px red`;
}

hero.addEventListener('mousemove', shadow)
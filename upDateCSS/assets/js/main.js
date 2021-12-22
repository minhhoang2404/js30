const inputs = document.querySelectorAll('.controls input');

function setData() {
    console.log(this.value);
    // inputs.forEach(input => input.this = this.value);
    console.log(this.name);

    if (this.name == 'base-color') {
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}`);
    } else {
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}px`);
    }
}

inputs.forEach(input => input.addEventListener('onchange', setData));
inputs.forEach(input => input.addEventListener('input', setData));

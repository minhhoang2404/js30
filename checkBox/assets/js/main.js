const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxs)

function handClick() {
    console.log(this.checked)
}

checkboxs.forEach(checkB => checkB.addEventListener('click', handClick))
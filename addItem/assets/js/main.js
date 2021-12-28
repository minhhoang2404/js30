const addItem = document.querySelector('.addItem')
const listItem = document.querySelector('.plates')
const items = []

function addItems(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item)
    console.log(items);
    toStringItem(items, listItem);
    this.reset();
}

function toStringItem(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
        <label>${plate.text}</label>
    </li>`
    })
}

addItem.addEventListener('submit', addItems)
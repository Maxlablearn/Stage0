
let field = Array(16).fill('');
const colors = {2: 'lightgreen', 4: 'green', 8: 'orange', 16: 'red',
              32: 'sandybrown', 64: 'braun', 128: 'violet', 256: 'purple',
              512: 'goldenrod', 1024: 'yellow', 2048: 'gold', 4096: 'deeppink'};


const body = document.getElementsByTagName('body');
const items = document.querySelectorAll('[data-item]');

console.log(body);
console.log(items);



function insertRandom(arr) {
  let random = Math.floor(Math.random()*(arr.length));
  field[arr[random]] = 2;
}

function getFreeItems() {
  let result = [];
  field.forEach((i, pos) => i === '' ? result.push(pos) : null)
  return result;  
}

function action(event) {
  insertRandom(getFreeItems());
  console.log(field);
  render();
}

function throw(dir) {
  let isThrow = false;
  let rows = [field[0],field[1], fi]
  if (dir === 'up') {
    for (let i = 0; i < 4; i++) {
      
    }
  }
}

function render() {
  field.forEach((el, pos) => {
    items[pos].setAttribute("class", `i${el}`);
    items[pos].innerHTML = el;
  });
}


document.body.addEventListener('keyup', action);
console.log(getFreeItems());
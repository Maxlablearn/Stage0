
let field = Array(16).fill('');
let oldField = [];
const colors = {2: 'lightgreen', 4: 'green', 8: 'orange', 16: 'red',
              32: 'sandybrown', 64: 'braun', 128: 'violet', 256: 'purple',
              512: 'goldenrod', 1024: 'yellow', 2048: 'gold', 4096: 'deeppink'};
let isThrow = false;


const body = document.getElementsByTagName('body');
const items = document.querySelectorAll('[data-item]');
const scoreItem = document.querySelector('.score');
const fieldItem = document.querySelector('.game-field');


function insertRandom(arr) {
  let random = Math.floor(Math.random()*(arr.length));
  field[arr[random]] = 2;
}

function getFreeItems() {
  let result = [];
  field.forEach((i, pos) => i === '' ? result.push(pos) : null)
  return result;  
}

function getColumn(num) {
  return [field[num], field[num+4], field[num+8] ,field[num+12]];
}  
function getRow(num) {
  return [field[num*4], field[num*4+1], field[num*4+2], field[num*4+3]];
}
function setColumn(arr, num) {
  [field[num], field[num+4], field[num+8] ,field[num+12]] = arr;
}
function setRow(arr, num) {
  [field[num*4], field[num*4+1], field[num*4+2], field[num*4+3]] = arr;
}

function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length + 1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function getScore() {
  return field.reduce((sum, el) => (el > 0 ? sum + el : sum), 0);
}

function throwOne(arr) {
  let j = 0;
  //isThrow = false;
  let result = ['','','','']; 
  for (let i = 0 ; i < 4; i ++) {
    if (arr[i] > 1) {
      if (result[j-1] === arr[i]) {
        isThrow = true;
        result[j-1] = arr[i] * 2;
      } else {
        result[j] = arr[i];
        j++;
      }
    }
  }
  //console.log(result);
  return result;
}

function throwAll(dir) {
  switch (dir) {
    case 'ArrowUp':
      for (let i = 0; i < 4; i++) {
        setColumn(throwOne(getColumn(i)), i);
      };
      break;
    case 'ArrowDown':
      for (let i = 0; i < 4; i++) {
        setColumn(throwOne(getColumn(i).reverse()).reverse(), i);
      };
      break;
    case 'ArrowLeft':
      for (let i = 0; i < 4; i++) {
        setRow(throwOne(getRow(i)), i);
      }
      break;
    case 'ArrowRight':
      for (let i = 0; i < 4; i++) {
        setRow(throwOne(getRow(i).reverse()).reverse(),i);
      }
      break;
  } 
}

function render() {
  field.forEach((el, pos) => {
    items[pos].setAttribute("class", `i${el}`);
    items[pos].innerHTML = el;
    scoreItem.innerHTML = getScore();
  });
}

function throwBoard(dir) {
  fieldItem.style.animation = `throw-${dir} 400ms linear 50ms 1`;
}

function actionKey(event) {
  isThrow = false;
  oldField = [...field];
  throwAll(event.key);
  throwBoard(event.key);
  render();
  setTimeout( () => { fieldItem.style.animation = 'none';}, 400);
  if (!compareArrays(oldField, field)) {
    setTimeout( () => {
      
      if (getFreeItems().length > 0) {
        insertRandom(getFreeItems());
      } else {
        alert('game over');
      }
      render();
      
    }, 400)
  }
}

insertRandom(getFreeItems());
render();

document.body.addEventListener('keyup', actionKey);
//console.log(getFreeItems());
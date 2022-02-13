// js

const url = 'https://api.unsplash.com';
const accKey = '2v_R0BwfjSQ_06kXpJC636D_FOPqurnyEWeaUQIjano';

const imgContainer = document.querySelector('.main-container');
const themeBtn = document.querySelector('.theme-btn');
const themeElements = document.querySelectorAll('[data-th]');
const findArr = document.querySelector('.find-array');
const findInput = document.querySelector('.find-input');
const findBtn = document.querySelector('.find-btn');
const findBtnImg = document.querySelector('.find-btn-img');

let images = [];
let countPhotos = 24;
let isSearch = false;


async function getData() {
    const res = await fetch(`${url}/photos/random?count=${countPhotos};query=&client_id=${accKey}`);
    const data = await res.json();
    showData(data);
}

function showData (data) {
    images = data.map(element => {
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = element.urls.regular;
        image.alt = 'image';
        imgContainer.append(image);
    });
}

function changeTheme() {
    themeElements.forEach((element) => {
        element.classList.toggle('dark');
    });
}

async function findData(find) {
    const res = await fetch(`${url}/search/photos?count=${countPhotos};query=${find}&client_id=${accKey}`);
    const data = await res.json();
    imgContainer.innerHTML = '';
    showFoundData(data);
    isSearch = true;
    findBtnImg.src = "./assets/icons/cross.svg";
}

function showFoundData(data) {
    images = data.results.map((element) => {
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = element.urls.regular;
        image.alt = 'image';
        imgContainer.append(image);
    })
}


getData();

themeBtn.addEventListener('click', changeTheme);
findArr.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        findData(findInput.value);
    }
});
findBtn.addEventListener('click', () => {
    if (!isSearch) {
        findData(findInput.value)
    } else {
        findInput.value = '';
        findBtnImg.src = "./assets/icons/search-icon.svg"
    }
});
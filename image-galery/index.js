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
    console.log(data);
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
    console.log('---theme---')
    themeElements.forEach((element) => {
        element.classList.toggle('dark');
    });
}

async function findData(find) {
    console.log('find text = ', find);
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
    }
});











/* server 

    my:
    access key:
        2v_R0BwfjSQ_06kXpJC636D_FOPqurnyEWeaUQIjano
    secret key:
        Tit6OBM0RdGVo_UPCQmn9n7yjrNcB3KMlhodfxlxea0



{"id":"jFuYVeN5K3Y","created_at":"2019-04-13T04:25:33-04:00","updated_at":"2022-02-10T10:07:48-05:00","promoted_at":null,"width":3024,"height":4032,"color":"#0c2626","blur_hash":"LeH.A^}?t5fi0%ENM{r;I9Sis+S6","description":null,"alt_description":"white petaled flowers","urls":{"raw":"https://images.unsplash.com/photo-1555143929-a40c91212992?ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY\u0026ixlib=rb-1.2.1","full":"https://images.unsplash.com/photo-1555143929-a40c91212992?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY\u0026ixlib=rb-1.2.1\u0026q=85","regular":"https://images.unsplash.com/photo-1555143929-a40c91212992?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","small":"https://images.unsplash.com/photo-1555143929-a40c91212992?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400","thumb":"https://images.unsplash.com/photo-1555143929-a40c91212992?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200","small_s3":"https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1555143929-a40c91212992"},"links":{"self":"https://api.unsplash.com/photos/jFuYVeN5K3Y","html":"https://unsplash.com/photos/jFuYVeN5K3Y","download":"https://unsplash.com/photos/jFuYVeN5K3Y/download?ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY","download_location":"https://api.unsplash.com/photos/jFuYVeN5K3Y/download?ixid=MnwxODE4ODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ1NTk3NTY"},"categories":[],"likes":528,"liked_by_user":false,"current_user_collections":[],"sponsorship":null,"topic_submissions":{},"user":{"id":"AGmyIQB_89k","updated_at":"2022-02-08T21:53:22-05:00","username":"yzsilence","name":"Sid Sun","first_name":"Sid","last_name":"Sun","twitter_username":null,"portfolio_url":null,"bio":null,"location":null,"links":{"self":"https://api.unsplash.com/users/yzsilence","html":"https://unsplash.com/@yzsilence","photos":"https://api.unsplash.com/users/yzsilence/photos","likes":"https://api.unsplash.com/users/yzsilence/likes","portfolio":"https://api.unsplash.com/users/yzsilence/portfolio","following":"https://api.unsplash.com/users/yzsilence/following","followers":"https://api.unsplash.com/users/yzsilence/followers"},"profile_image":{"small":"https://images.unsplash.com/profile-1555144106955-8c532b8dec40?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32","medium":"https://images.unsplash.com/profile-1555144106955-8c532b8dec40?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64","large":"https://images.unsplash.com/profile-1555144106955-8c532b8dec40?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128"},"instagram_username":null,"total_collections":0,"total_likes":3040,"total_photos":5,"accepted_tos":true,"for_hire":false,"social":{"instagram_username":null,"portfolio_url":null,"twitter_username":null,"paypal_email":null}},"exif":{"make":"Apple","model":"iPhone 8","name":"Apple, iPhone 8","exposure_time":"1/33","aperture":"1.8","focal_length":"4.0","iso":640},"location":{"title":null,"name":null,"city":null,"country":null,"position":{"latitude":null,"longitude":null}},"views":2702411,"downloads":22935}

*/
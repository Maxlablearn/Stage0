
const playButton = document.querySelector('.play-btn');
const playButtonBars = document.querySelectorAll('.bar');
const songId = document.getElementById('audioId');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const currentTime = document.querySelector('.current-time');
const songTimeInd = document.querySelector('.song-time');
const artistTittle = document.querySelector('.artist');
const songTittle = document.querySelector('.song-title');
const bgCover = document.querySelector('.bg-cover');
const titleImage = document.querySelector('.album-image');


let isPlay = false;
let songIndex = 0;
let songsArr = [['./assets/audio/beyonce.mp3', 'Beyonce', "Don't Hurt Yourself", './assets/img/lemonade (1).png'],
                ['./assets/audio/dontstartnow.mp3', "Dua Lipa", "Don't Start Now", './assets/img/dontstartnow (1).png']];
let songTime = 0;


artistTittle.innerText = songsArr[songIndex][1];
songTittle.innerText = songsArr[songIndex][2];
bgCover.src = songsArr[songIndex][3];
titleImage.src = songsArr[songIndex][3];


function playPause() {
  isPlay = !isPlay;
  console.log('bums');
  console.log(songId.duration, ' - ', songId);
  if (isPlay) {
    playButtonBars.forEach(el => el.classList.add('pause'));
    songId.play();
  } else {
    playButtonBars.forEach(el => el.classList.remove('pause'));
    songId.pause();
  }
  window.setTimeout(changeSongDuration, 100);
}

function playNext() {
  if (songIndex === songsArr.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  songTime = 0;
  isPlay = false;
  songId.src = songsArr[songIndex][0];
  playPause()
  
  artistTittle.innerText = songsArr[songIndex][1];
  songTittle.innerText = songsArr[songIndex][2];
  bgCover.src = songsArr[songIndex][3];
  titleImage.src = songsArr[songIndex][3];
  window.setTimeout(changeSongDuration, 100);
  
}

function playPrev() {
  if (songIndex === 0) {
    songIndex = songsArr.length - 1;
  } else {
    songIndex -= 1;
  }
  songTime = 0;
  isPlay = false;
  songId.src = songsArr[songIndex][0];
  
  playPause()

  artistTittle.innerText = songsArr[songIndex][1];
  songTittle.innerText = songsArr[songIndex][2];
  bgCover.src = songsArr[songIndex][3];
  titleImage.src = songsArr[songIndex][3];
  window.setTimeout(changeSongDuration, 100);
  
}

function changeSongDuration() {
  songTimeInd.innerText = `${Math.floor(songId.duration / 60)}:${Math.floor(songId.duration % 60)}`;
}


playButton.addEventListener('click', playPause);
prevButton.addEventListener('click', playPrev);
nextButton.addEventListener('click', playNext);

console.log(songId);


//    
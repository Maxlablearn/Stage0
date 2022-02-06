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
const progressBar = document.getElementById('progress');

let isPlay = false;
let songIndex = 0;
let songsArr = [['./assets/audio/rolling.mp3', 'Adele', 'Rolling In The Deep', './assets/img/21.jpg'],
                ['./assets/audio/beyonce.mp3', 'Beyonce', "Don't Hurt Yourself", './assets/img/lemonade (1).png'],
                ['./assets/audio/dontstartnow.mp3', "Dua Lipa", "Don't Start Now", './assets/img/dontstartnow (1).png'],
                ['./assets/audio/prostyya.mp3', 'Lavon Volski', 'Prostyja słovy', './assets/img/volsky.jpg']];
let songTime = 0;
let songDuration = 0;

setSong(songIndex);
progressBar.value = 0;
setTimeout(changeSongDuration, 500);
updateProgress();
changePlayPosition();


function playPause() {
  isPlay = !isPlay;
  if (isPlay) {
    playButtonBars.forEach(el => el.classList.add('pause'));
    songId.play();
  } else {
    playButtonBars.forEach(el => el.classList.remove('pause'));
    songId.pause();
  }
  setTimeout(changeSongDuration, 500);
}

function playNext() {
  songIndex === songsArr.length - 1 ? songIndex = 0 : songIndex += 1;
  setSong(songIndex);
  setTimeout(changeSongDuration, 500);
  playPause()
}

function playPrev() {
  songIndex === 0 ? songIndex = songsArr.length - 1 : songIndex -= 1;
  setSong(songIndex);
  setTimeout(changeSongDuration, 500);
  playPause()
}

function setSong(songNum) {
  songTime = 0;
  isPlay = false;
  songId.src = songsArr[songNum][0];
  artistTittle.innerText = songsArr[songNum][1];
  songTittle.innerText = songsArr[songNum][2];
  bgCover.src = songsArr[songNum][3];
  titleImage.src = songsArr[songNum][3];
}

function changeSongDuration() {
  songDuration = Math.floor(songId.duration);
  songTimeInd.innerText = timeFormatting(songDuration);
  progressBar.max = songDuration;
}

function changePlayPosition() {
  songTime = progressBar.value;
  songId.currentTime = songTime;
}

function updateProgress() {
  songTime = songId.currentTime;
  progressBar.value = songTime;
  currentTime.innerText = timeFormatting(songTime);
  progressBar.style.background = `linear-gradient(to right, rgba(212, 181, 80, 0.5) 0%, rgba(212, 181, 80, 0.5) ${songTime / songDuration * 100}%, #fff ${songTime / songDuration * 100}%, white 100%)`;
}

function timeFormatting(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? '0' + sec : sec}`
}

playButton.addEventListener('click', playPause);
prevButton.addEventListener('click', playPrev);
nextButton.addEventListener('click', playNext);
progressBar.addEventListener('pointer', playPause);
progressBar.addEventListener('change', changePlayPosition);
songId.addEventListener('ended', playNext);
setTimeout(songId.addEventListener('timeupdate', updateProgress), 500);

//
let isPlay = false;

const playButton = document.querySelector('.play-btn');
const playButtonBars = document.querySelectorAll('.bar');

function playPause() {
  isPlay = !isPlay;
  console.log('bums');
  if (isPlay) {
    playButtonBars.forEach(el => el.classList.add('pause'));
  } else {
    playButtonBars.forEach(el => el.classList.remove('pause'));
  }
}

playButton.addEventListener('click', playPause);
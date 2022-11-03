import vimeoPlayer from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('#vimeo-player');
const STORAGE_KAY = "videoplayer-current-time";
const player = new vimeoPlayer(iframe);

setCurrentTime();

player.on('timeupdate', throttle(playedTime, 1000));

function playedTime(data) {
  localStorage.setItem(STORAGE_KAY, `${data.seconds}`);
};

function setCurrentTime() {
  const savedTimeToPlay = localStorage.getItem(STORAGE_KAY);
  if (savedTimeToPlay) {
    player.setCurrentTime(savedTimeToPlay);
  }
};

// import player from '@vimeo/player';
// import throttle from "lodash.throttle";
//    const iframe = document.querySelector(".iframe");
//      const player = new Vimeo.Player(iframe);
// const STORAGE_KAY = "videoplayer-current-time";

// const onPlay = function (data){  
// };

// localStorage.setItem(STORAGE_KAY, data.seconds);
// onPlay = throttle((data) => {
//     localStorage.setItem(STORAGE_KAY, data.seconds);
// }, 1000);

// player.on('timeupdate', onPlay);

// player.getCurrentTime(STORAGE_KAY).then(function(seconds) {
    
// }).catch(function (error) {
    
// });

// player.on('loaded', function () {
//     if (localStorage.getItem(STORAGE_KAY)) {
//         player.setCurrentTime(localStorage.getItem(STORAGE_KAY));
//     }
// });


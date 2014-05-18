/* youtube api 시작 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done = false;
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '300',
      width: '400',
      videoId: 'r4u3BzM0rqo',
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
}

function onPlayerReady(evt) {
    evt.target.playVideo();
}

function onPlayerStateChange(evt) {
    if (evt.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

var start = document.getElementsByTagName("button")[0];
start.onclick = function(){
    player.playVideo();
};

var stop = document.getElementsByTagName("button")[1];
stop.onclick = function(){
    player.stopVideo();
};
/* youtube api 끝 */

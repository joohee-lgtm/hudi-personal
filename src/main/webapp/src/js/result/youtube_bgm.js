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
      videoId: 'FTzeJO9zQ8E',
      playerVars: {
    	  'autoplay': 0, 
    	  'controls': 0, 
    	  'showinfo' : 0, 
    	  'showsearch' : 0, 
    	  'modestbranding' : 0,
    	  'disablekb' : 0}
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
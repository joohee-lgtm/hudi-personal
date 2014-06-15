/* for result desktop web*/

/* youtube api 시작 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done = false;
var player;
var vdata;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '300',
      width: '400',
      videoId: jamjar.bgm_url,
      events : {
    	  'onReady': onPlayerReady,
      },
      playerVars: {
    	  'start' 	: parseInt(jamjar.bgm_start),
    	  'end' 	: parseInt(jamjar.bgm_end),
    	  'controls': 0, 
    	  'showinfo' : 0, 
    	  'showsearch' : 0, 
    	  'modestbranding' : 0,
    	  'disablekb' : 0,
    	  'loop' : 0

    	  }
    });
    jObjInfo.getBgmInfo();
}

function onPlayerReady() {
    jObjInfo.m_title = player.getVideoData().title;
    jObjInfo.setData(3, jObjInfo.m_title);
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
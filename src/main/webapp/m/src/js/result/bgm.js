/* for result mobile */

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
    	  'onStateChange' : onPlayerStateChange,
      },
      playerVars: {
    	  'start' 	: parseInt(jamjar.bgm_start),
    	  'end' 	: parseInt(jamjar.bgm_end),
    	  'autoplay': 0, 
    	  'controls': 0, 
    	  'showinfo' : 0, 
    	  'showsearch' : 0, 
    	  'modestbranding' : 0,
    	  'disablekb' : 0}
    });
    jObjInfo.getBgmInfo();
}

function onPlayerReady() {
    jObjInfo.m_title = player.getVideoData().title;
    jObjInfo.setData(3, jObjInfo.m_title);
}

function onPlayerStateChange(evt) {
	console.log(evt);
	// play event = 1 buffer event = 3
	if(evt.data == 1){
		_o.play.ready();
		_o.play._start();
	}
}

function stopVideo() {
    player.stopVideo();
}
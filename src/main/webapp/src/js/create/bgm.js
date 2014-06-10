var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done = false;
var player;

var resultArr = [];
var page = 1;
var selectedBGM = {
		url : ""
		// url
		// start
		// end
		
};

google.load('search', '1');
google.setOnLoadCallback(ytOnLoad);

function ytOnLoad(){
	var searchControl = new google.search.SearchControl();
	var videoSearch = new google.search.VideoSearch();
	searchControl.addSearcher(videoSearch);
	searchControl.setSearchCompleteCallback(this, ytSearchComplete);
	videoSearch.setResultSetSize(8);
	var content = document.getElementById("content");
	searchControl.draw(content);
	searchControl.execute("bigbang");
}

function ytSearchComplete(searchControl, videoSearch){
	for (var i=0 ; i<8 ; i++){
		var reobj = videoSearch.results[i]
		resultArr.push(reobj);
	}
	if (page === 8){
		setResultTn();
		page = 1;
		resultArr = [];
		return ;
	} else {
		videoSearch.gotoPage(page);
		page++;
	}
	var cont = document.getElementById("content");
	var rest = cont.children[0].children[1];
	rest.style.display = "none";
}

function setResultTn(){
	var msw = document.getElementById("musicSelectWrap");
	var ul = msw.getElementsByTagName("ul")[0];
	msw.removeChild(ul);
	var newul = document.createElement("ul");
	
	for (var i=0 ; i<resultArr.length ; i++){
		var li = document.createElement("li");
		var tnimg = "<img src=\"" +  resultArr[i].tbUrl + "\">";
		li.innerHTML = tnimg;
		newul.appendChild(li);
		addEvent(li, resultArr[i]);
	}
	msw.appendChild(newul);
}
function putYt(ytobj){
	var mswrap = document.getElementById("musicSelectWrap");
	var div = mswrap.getElementsByTagName("div")[0];
	var embed = "<embed src=\"" + ytobj.playUrl + "\">";
	var span = "<span>" + ytobj.title +"</span>"
	var total = embed + span;
	div.innerHTML = total;
}

function putBgmAtPreview(ytobj){
	var vId = sortUrl(ytobj.url);
	var pwrap = document.getElementById("previewWrap");
	var slide = pwrap.getElementsByTagName("div")[0];
	var pyt = document.getElementById("player");
	slide.removeChild(pyt);
	var newyt = document.createElement("div");
	newyt.id = "player";
	var setting = document.getElementById("setting");
	slide.insertBefore(newyt, setting);
	player = new YT.Player('player', {
	      height: '300',
	      width: '400',
	      videoId: vId,
	      events: {
	      }
	    });
	selectedBGM.url = vId;
}

function addEvent(li, reobj){
	li.addEventListener('click', function(){
		putYt(reobj);
		putBgmAtPreview(reobj);
	}, false);
}

function sortUrl(url){
	var start = url.search(/\?v=/) + 3;
	subtext = url.substring(start, url.length);
	return subtext;
}



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done = false;

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
		var reobj = videoSearch.results[i];
		if (reobj != null){
			resultArr.push(reobj);
		}
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
		var title = "<p>"+ resultArr[i].title + "</p>"; 
		var total = tnimg + title;
		li.innerHTML = total;
		newul.appendChild(li);
		li.getElementsByTagName("p")[0].style.textOverflow = "ellipsis";
		addEvent(li, resultArr[i]);
	}
	msw.appendChild(newul);
}

var player2;
function putYt(ytobj){
	var vId = sortUrl(ytobj.url);
	var title = "<span>" + ytobj.title +"</span>";
	var mswrap = document.getElementById("musicSelectWrap");
	var span = mswrap.getElementsByTagName("span")[0];
	var div = mswrap.getElementsByTagName("div")[0];
	var pyt = document.getElementById("player2");
	div.removeChild(pyt);
	var newyt = document.createElement("div");
	newyt.id = "player2";
	div.insertBefore(newyt, span);
	player2 = new YT.Player('player2', {
	      height: '180',
	      width: '300',
	      videoId: vId,
	      events: {
	      }
	    });
	span.innerHTML = title;
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

var urlstorage;

function addEvent(li, reobj){
	li.addEventListener('click', function(){
		putYt(reobj);
		putBgmAtPreview(reobj);
	}, false);
	
	li.addEventListener('mouseover', function(){
		li.style.background = "RGBA(35, 35, 34, 0.3)";
	}, false);
	
	li.addEventListener('mouseout', function(){
		li.style.background = "none";
	}, false);

}

function stopYtInSelectMusic(){
	player2.stopVideo();
}

function sortUrl(url){
	var start = url.search(/\?v=/) + 3;
	subtext = url.substring(start, url.length);
	return subtext;
}



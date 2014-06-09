// How to search through a YouTube channel aka http://www.youtube.com/members
google.load('search', '1');
function OnLoad() {
	// create a search control 
	var sc = new google.search.SearchControl();
	var videoSearch = new google.search.VideoSearch();
	// So the results are expanded by default
	// options = new google.search.SearcherOptions();
	// options.setExpandMode(google.search.SearchControl.EXPAND_MODE_OPEN);
	// Create a video searcher and add it to the control
	// searchControl.addSearcher(new google.search.VideoSearch(), options);
	sc.addSearcher(videoSearch);
	sc.setSearchCompleteCallback(this, searchCpl);
	videoSearch.setResultSetSize(8);
	
	// Draw the control onto the page 
	var searchbox = document.getElementById("content");
	sc.draw(searchbox);
	//search 
	sc.execute("bigbang");
	/* console.log(videoSearch.results); */
}
var a = [];
var p=1;
function searchCpl(searchControl, videoSearch){
	for (var c=0; c<8 ; c++){
		var result = videoSearch.results[c];
		a.push(result);
		setObj(result);
	}
	if (p === 8){
//		console.log(a);
		return ;
	} else {
		videoSearch.gotoPage(p);
		p++;
	}
	var cont = document.getElementById("content");

	var rest = cont.children[0].children[1];
	rest.style.display = "none";
}


function setObj(obj){
	var wrap = document.getElementById("musicSelectWrap");
	var ul = wrap.getElementsByTagName("ul")[0];

	var li = document.createElement("li");
	var span = document.createElement("span");
	var tn = "<img src=\"" + obj.tbUrl + "\">";
	li.innerHTML = tn;
	ul.appendChild(li);
}


google.setOnLoadCallback(OnLoad);

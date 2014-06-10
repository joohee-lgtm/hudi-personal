/*
	send data from client to server
*/

function sendUserData(e) {
	e.preventDefault();
	
	var data = {
		aURL : "",
		title : "",
		desc : "",
		user : "",
		bgm : "",
		thumbnail : ""
	};
	
	data.aURL 			= getImgURLs();
	data.title 			= getTitle();
	data.desc 			= getDesc();
	data.bgm 			= getBgmId();
	data.thumbnail 		= data.aURL[0];
	data.bgmStart		= getBgmStart();
	data.bgmEnd			= getBgmEnd();
	data.secPerImg		= getSpi();
	
		
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/collageJam/create_jar", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			console.log('status: ' + xhr.statusText);
			var created_jid = xhr.getResponseHeader("jid");
			var url = "/collageJam/result?id="+created_jid;
			window.location = url;
			//gotoResultPage(created_jid);
		}
	};	
	xhr.send("data="+JSON.stringify(data));
	
	return false;
}

function gotoResultPage(i){
	var xhr = new XMLHttpRequest();
	var url = "/collageJam/result?id="+i;
	xhr.open("get", url, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			console.log('status: ' + xhr.statusText);
		}
	};	
	xhr.send();
	return false;
}

function getBgm(){
	return selectedBGM.url;
}

function getImgURLs() {
	return userDataModel.originalURL;
}

function getTitle() {
	return document.querySelector('#ajaxform > input').value;
}

function getDesc() {
	return document.querySelector('#ajaxform > textarea').value;
}

function getBgmId() {
	return player.getVideoUrl();
}

function registerEvents() {
	var createbt = document.getElementById('ajaxform');
	createbt.addEventListener('submit', sendUserData, false);
}

function getBgmStart() {
	return '1m10s';
}

function getBgmEnd() {
	return '2m2s';
}

function getSpi() {
	var spi = document.getElementById('rangevalue');
	return spi.value;
}

window.addEventListener('load', function() {
	registerEvents();
}, false);



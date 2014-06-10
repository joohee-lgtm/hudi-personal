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
			var created_jid = xhr.getResponseHeader("jid");
			var url = "/collageJam/result?id="+created_jid;
			window.location = url;
		}
	};	
	xhr.send("data="+JSON.stringify(data));
	
	return false;
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
	return selectedBGM.url;
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



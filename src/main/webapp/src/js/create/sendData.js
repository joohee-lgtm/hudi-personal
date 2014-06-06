/**
 * send data from client to server
 */

function sendUserData(e) {
	var aURL = getImgURLs();
	var title = getTitle();
	var desc = getDesc();
	var bgm = getBgmId();
	
	var data = {
		aURL : aURL,
		title : title,
		desc : desc,
		bgm : bgm
	};
	

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/collageJam/create", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			response = xhr.responseText;
			var data = JSON.parse(response);
			console.log(data.jid);
			
		}
	};
	
	xhr.send("data="+JSON.stringify(data));
	
	e.preventDefault();
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
	return player.getVideoUrl();
}

function registerEvents() {
	var createbt = document.getElementById('ajaxform');
	createbt.addEventListener('submit', sendUserData, false);
}

window.addEventListener('load', function() {
	registerEvents();
}, false)
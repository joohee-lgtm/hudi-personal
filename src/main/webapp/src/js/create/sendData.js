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
	data.thumbnail 		= getTn(data.aURL);
	data.bgmStart		= getBgmStart();
	data.bgmEnd			= getBgmEnd();
	data.secPerImg		= getSpi();
	
	var incomplete_data_arr = checkData(data);
	
	if (incomplete_data_arr.length === 0){
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
	} else {
		alertPutData(incomplete_data_arr);
	}
}

function checkData(data){
	var data_arr = [];
	var text;

	if(data.aURL.length === 0)
		data_arr.push("select one more image");
	if(data.title === "")
		data_arr.push("please set title");
	if(data.desc === "")
		data_arr.push("please set desc");
	if(data.bgm === "")
		data_arr.push("select background music");
	
	return data_arr;
}

function alertPutData(alert_arr){
	var alertext = "";
	for (var i=0; i<alert_arr.length; i++){
		alertext = alert_arr[i] + alert + "\n";
	}
	console.log(alertext);
	alert(alertext);
}

function getTn(urllist){
	var tn;
	if (urllist.length === 0){
		tn = "./src/img/nophoto.jpg";
	} else {
		tn = urllist[0];
	}
	return tn;
}

function getImgURLs() {
	return userDataModel.originalURL;
}

function getTitle() {
	var title = document.querySelector('#ajaxform > input').value;
	if (title === "");{
		title = "no title";
	}
	return title;
}

function getDesc() {
	var desc = document.querySelector('#ajaxform > textarea').value;
	if (desc === ""){
		desc = "no description";
	}
	return desc;
}

function getBgmId() {
	var bgm = selectedBGM.url;
	if (bgm === ""){
		bgm = "HxXYAfBdre8";
	}
	return bgm;
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
	var speed = setting.getElementsByTagName('div')[0].getElementsByTagName('output')[0].value;
	return speed;
}

window.addEventListener('load', function() {
	registerEvents();
}, false);



// col, row 에 해당하는 매트릭스 얻기
function getSection(matrix, col, row){
	var maxROW = 2;
	var p = (col)*maxROW + (row);
	var	result = matrix[p];
	return result;
}

// 00px를 숫자로 바꿔주기
function toInt(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
}

// 이미지의 주소가 들어있는 곳
var imgArray = [
	"http://static.comicvine.com/uploads/original/12/123441/3588197-3150345-8768287685-the-av.jpeg",
	"https://d2nh4f9cbhlobh.cloudfront.net/_uploads/galleries/18743/theavenegers22806119d74ptwt3.jpg",
	"http://captainamericanews.files.wordpress.com/2014/04/0a2107702-all_avengers_forever.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5whXDsNMc3RvN3RMgo64GMnM87FuWh71F9eeTOiLLXkG0FpU",
	"http://img3.wikia.nocookie.net/__cb20120207200038/marvelmovies/images/a/a3/The_Avengers-1.jpg",
	"http://www.moviedeskback.com/wp-content/gallery/aside-from-post-gallery/the-avengers-collage-wallpapers-2.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjwg4a0UiDMEXBFjMzO_DSMYxnTtMTeTZdDJ0s3-nyKyYsxyt2w",
	"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNmZ_AtnrxhQIEBJAGQsVzTMxRRMVJVI9-tHqDtKYVvB8yKgWW",
];

// 구간별 시간 설정
var termArray = [
	1000,
	2000,
	3000,
	1400,
	1000,
	3000,
	1700,
	2500,
	2100
];

var slide = document.getElementById("slide").children;
var temparea = document.getElementById("temparea");
var selected = getSection(slide, 0, 0);

for( var i=1 ; i<imgArray.length ; i++ ){
	var img = new Image();
	img.src = imgArray[i];
	temparea.appendChild(img);
}

// 첫번째 그림 보여주기
var firstimg = new Image();
firstimg.src = imgArray[0];
firstimg.onload = function(){
	selected.removeChild(selected.children[0]);
	selected.appendChild(firstimg);

	var ratio = firstimg.width/firstimg.height;
	if (firstimg.width > firstimg.height){
		selected.children[0].width = "800";
	} else {
		selected.children[0].height = "600";
	}
	var oImg = selected.children[0];
	var iStyle = window.getComputedStyle(oImg);
	if (iStyle.width > "800px"){
		oImg.height = 800*ratio;
		oImg.width = 800;
	} else if (iStyle.height > "600px"){
		oImg.width = 600*ratio;
		oImg.height = 600;
	} else {

	}
};



//load youtube player

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done = false;
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '250',
      width: '400',
      videoId: 'JW5meKfy3fY',
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
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

var start = document.getElementsByTagName("button")[0];
start.onclick = function(){
    player.playVideo();
}

var stop = document.getElementsByTagName("button")[1];
stop.onclick = function(){
    player.stopVideo();
}

// --------------youtube api----------------


window.onload = function(){

	var count = 0;
	var intervalId = null;

	var time;
	var playBt = document.getElementById('setting').getElementsByTagName('Button')[0];
	var stopBt = document.getElementById('setting').getElementsByTagName('Button')[1];
	stopBt.onclick = function(){
		console.log("stop");
		player.stopVideo();
		clearInterval(intervalId);
		var remain = count%(temparea.children.length+1);
		for(var i=0; i<8-remain ; i++){
			temparea.appendChild(selected.children[0]);
			selected.appendChild(temparea.children[0]);
		}
		count = 0;
	};

	for (var i=0; i<temparea.children.length ; i++){
		temparea.children[i].width = 600;
		// var w = temparea.children[i].width;
		// var h = temparea.children[i].height;
		// if ( w > h){
		// 	temparea.children[i].width = "800";
		// } else {
		// 	temparea.children[i].height = "600";
		// }
	}

	playBt.onclick = function(){
		player.playVideo();
		time = document.getElementById("setting").getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;
		function setSlide(){
			temparea.appendChild(selected.children[0]);
			selected.appendChild(temparea.children[0]);
			count++;
		}
		if (count == 0){
			intervalId = setInterval(setSlide, time*10);
		} else {
			clearInterval(intervalId);
			var remain = count%(temparea.children.length+1);
			for(var i=0; i<8-remain ; i++){
				temparea.appendChild(selected.children[0]);
				selected.appendChild(temparea.children[0]);
			}
			count = 0;
			intervalId = setInterval(setSlide, time*10);
		}
	};

};




// intervalId = setInterval(intervalIncrement, 2000);


/*
//window.addEventListener("DOMContentLoaded", function(event)
//window.addEventListener("load", function(event)

function timeset(time){
	var total;
	for (var i=0; i<time; i++){
		total = total + termArray[i];
	}
}

// 첫번째 이미지 셋팅하기
var firstimg = new Image();
firstimg.src = imgArray[0];

firstimg.onload = function(){
	temparea.appendChild(firstimg);
	var style = window.getComputedStyle(temparea.children[0]);
	if (toInt(style.width) > toInt(style.height)){
		temparea.children[0].width = "400";
	} else {
		temparea.children[0].height = "300";
	}
	selected.removeChild(selected.children[0]);
	selected.appendChild(temparea.children[0]);
}

var imgObject = new Array(imgArray.length);

function setImages(imgArray){
	for ( var i=0 ; i<imgArray.length ; i++ ){
		var img = new Image();
		img.src = imgArray[i];
		imgObject[i] = img;
	}
}

setImages(imgArray);

for (var i=0; i<imgObject.length; i++){
	temparea.appendChild(imgObject[i]);
}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }

window.onload = function(){
	for (var i=0; i<temparea.children.length; i++){	
		var st = window.getComputedStyle(temparea.children[i]);
		if (toInt(st.width) > toInt(st.height)){
			temparea.children[i].width = "400";
		} else {
			temparea.children[i].height = "300";
		}
	}

	for (var i=0; i<temparea.children.length; i++){
		selected.removeChild(selected.children[0]);
		selected.appendChild(temparea.children[i]);
		sleep(termArray[i]);
	}
}

// for (var i=1 ; i<imgArray.length ; i++){
// 	var img = new Image();
// 	img.src = imgArray[i];
// 	img.onload = function(){

// 		var style = window.getComputedStyle(img);
// 		// 가로, 세로 길이 지정하기
// 		if (toInt(style.width) > toInt(style.height)){
// 			img.width = "400";
// 		} else {
// 			img.height = "300";
// 		}
// 	}

// 	if (temparea.children.length == 0){
// 		temparea.appendChild(img);
// 	} else {
// 		var lastnode = temparea.children[temparea.children.length - 1];
// 		temparea.insertBefore(img, lastnode);
// 	}

// 	//temp area에 집어넣기
// 	// setTimeout(function(){
// 	// 	selected.removeChild(selected.children[0]);
// 	// 	selected.appendChild(temparea.children[0]);
// 	// }, timeset(i))
// }

// for (var i=0; i<temparea.children.length; i++){
// 	var style = window.getComputedStyle(temparea.children[i]);
// 	console.log(style.width);
// }


// // /*
// var num = 0;
// var max = imgArray.length;
// var intervalId = null;

// function intervalIncrement(){
// 	num ++;
// 	if (num == max){
// 		clearInterval(intervalId);
// 	} else {
// 		setSlide(num);
// 	}
// }

// intervalId = setInterval(intervalIncrement, 2000);

// function setSlide(num){
// 	var img = new Image();
// 	img.src = imgArray[num];
// 	img.onload = function(){
// 		temparea.appendChild(img);
// 		var style = window.getComputedStyle(img);
// 		if (toInt(style.width) > toInt(style.height)){
// 			temparea.children[0].width = "400";
// 		} else {
// 			temparea.children[0].height = "300";
// 		}
// 		selected.removeChild(selected.children[0]);
// 		selected.appendChild(temparea.children[0]);
// 	}	
// }



*/







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

var firstimg = new Image();
firstimg.src = imgArray[0];
firstimg.onload = function(){
	selected.removeChild(selected.children[0]);
	selected.appendChild(firstimg);
	selected.children[0].width = "400";
};


window.onload = function(){

	var count = 0;
	var intervalId = null;

	var time;
	var playBt = document.getElementById("setting").children[2];
	var stopBt = document.getElementById("setting").children[3];

	console.log(stopBt);
	stopBt.onclick = function(){
		console.log("stop");
		clearInterval(intervalId);
		var remain = count%(temparea.children.length+1);
		for(var i=0; i<8-remain ; i++){
			temparea.appendChild(selected.children[0]);
			selected.appendChild(temparea.children[0]);
		}
		count = 0;
	};

	for (var i=0; i<temparea.children.length ; i++){
		temparea.children[i].width = "400";
	}

	playBt.onclick = function(){
		time = document.getElementById("setting").children[1].value;
		function setSlide(){
			console.log(count);
			temparea.appendChild(selected.children[0]);
			selected.appendChild(temparea.children[0]);
			count++;
		}
		if (count == 0){
			intervalId = setInterval(setSlide, time);
		} else {
			clearInterval(intervalId);
			var remain = count%(temparea.children.length+1);
			for(var i=0; i<8-remain ; i++){
				temparea.appendChild(selected.children[0]);
				selected.appendChild(temparea.children[0]);
			}
			count = 0;
			intervalId = setInterval(setSlide, time);
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







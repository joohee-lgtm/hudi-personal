


// col, row 에 해당하는 매트릭스 얻기
function getSection(matrix, col, row, maxrow){
	var p = (col)*maxrow + (row);
	var	result = matrix[p];
	return result;
}

// 00px를 숫자로 바꿔주기
function toInt(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
}

// 이미지 사이즈 설정하기
function setImgSize(img){
	if (img.height < img.width){
		img.height = img.height*(400/img.width);
		img.width = "400";
		if (img.height > 300){
			img.width = img.width*(300/img.height);
			img.height = "300";	
		}
	} else if (img.width < img.height){
		img.width = img.width*(300/img.height);
		img.height = "300";
	} else {
		img.height = "300";
		img.width = "300";
	}
}

function setImgMargin(img){
	if (img.height < 300){
		var margin = (300-img.height)/2;
		img.style.marginTop = margin + "px";
	}
}

function imgLoad(imgsrc){
	var img = new Image();
	img.src = imgsrc;
	var temparea = document.getElementById("temparea"); // 구글을 통해 검색된 이미지가 우선 받아질 공간
	temparea.appendChild(img);
	img.onload = function(){
		setImgSize(img);
		setImgMargin(img);
	};
}

function setDefaultImg(){
	var img = new Image();
	img.src = "./images/nophoto.jpg";
	img.onload = function(){
		if (selected.children.length != 0){
			selected.removeChild(selected.children[0]);
			selected.appendChild(img);
		} else {
			selected.appendChild(img);
		}
	};
}

function clearTemparea(){
	var temparea = document.getElementById("temparea"); // 구글을 통해 검색된 이미지가 우선 받아질 공간
	var pn = temparea.parentNode;
	if (temparea.children.length != 0){
		pn.removeChild(temparea);
		var newta = document.createElement('section');
		newta.id = 'temparea';
		pn.appendChild(newta);
	}
}

// 구간별 시간 설정
var times = [
	1000, 2000, 3000, 1400, 1000, 3000, 1700, 2500, 2100
];

var slide = document.getElementById("slide").children; // 1x1, 1x2, 2x1, 2x2가 저장된 array
var selected = getSection(slide, 0, 0, 2); // 슬라이드에서 원하는 위치를 선택하는 함수

var photobt = document.getElementById('create'); // 사진 고르기 버튼
var resultbt = document.getElementById('resultButton'); // 결과 보기 버튼

var photo = document.getElementById('photoSelectWrap'); // 사진 고르기 창
var result = document.getElementById('resultWrap'); // 결과 보기창

var setting = document.getElementById('setting');
var playbt = setting.getElementsByTagName('Button')[0];
var stopbt = setting.getElementsByTagName('Button')[1];

//처음 create page로 들어갔을 때
photo.style.display = "block";
result.style.display = "none";

var images = new Array();

photobt.onclick = function(){
	result.style.display = "none";
	photo.style.display = "block";
	clearTemparea();
	setDefaultImg();
};

var navi = document.getElementById('navigation');
var arrange = document.getElementById('arrangePhotos');

resultbt.onclick = function(){
	navi.style.zIndex = arrange.style.zIndex = -1;

	result.style.display = "block";
	photo.style.display = "none";
	images = userDataModel.originalURL;

	for (var i=0; i<images.length ; i++){
		imgLoad(images[i]);
	}

	// 첫번째 그림 셋팅
	selected.removeChild(selected.children[0]);
	selected.appendChild(temparea.children[0]);
};

window.onclick = function(e){
	if (e.srcElement.offsetParent === document.getElementById('slide')){
		result.style.display = "none";
		photo.style.display = "block";
		navi.style.zIndex = arrange.style.zIndex = 10;
		player.stopVideo();
		stopSlide(count);
		count = 0;
		clearTemparea();
		setDefaultImg();
	}
};

var count = 0;
var intervalId = null;

function setSlide(){
	temparea.appendChild(selected.children[0]);
	selected.appendChild(temparea.children[0]);
	count++;
}

function stopSlide(count){
	clearInterval(intervalId);
	var n = temparea.children.length+1;
	var remain = count%n;
	if (n != 0){
		for (var i=0; i<n-remain ; i++){
			temparea.appendChild(selected.children[0]);
			selected.appendChild(temparea.children[0]);
		}
	}
}

playbt.onclick = function(){
	console.log("play");
	player.playVideo(); // 유튜브 재생하기
	var time = setting.getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;

	if (count != 0){
		stopSlide(count);
		count = 0;
	}

	intervalId = setInterval(setSlide, time*10);
};

stopbt.onclick = function(){
	console.log("stop");
	player.stopVideo();
	stopSlide(count);
	count = 0;
};

/*
window.onload = function(){
	var count = 0;
	var intervalId = null;

	function setSlide(){
		temparea.appendChild(selected.children[0]);
		selected.appendChild(temparea.children[0]);
		count++;
	}

	// 슬라이드 정지, 정지화면에 나타나는 그림을 첫번째 그림으로 맞추기
	function stopSlide(count){
		clearInterval(intervalId);
		var remain = count%(temparea.children.length+1);
		for(var i=0; i<8-remain ; i++){
			temparea.appendChild(selected.children[0]);
			selected.appendChild(temparea.children[0]);
		}
	}

	// 플레이어 정지
	playbt.onclick = function(){
		console.log("play");
		player.playVideo(); // 유튜브 재생하기
		var time = setting.getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;
		
		if (count != 0){ // 슬라이드가 재생중일 때 play 버튼을 누름
			stopSlide(count);
			count = 0;
		}
		intervalId = setInterval(setSlide, time*10);
	};

	stopbt.onclick = function(){
		console.log("stop");
		player.stopVideo(); // 유튜브 멈추기
		stopSlide(count); // 슬라이드 멈추기
		count = 0;
	};
};
*/


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

// 이미지의 주소가 들어있는 곳
// var images = [
// 	"https://d2nh4f9cbhlobh.cloudfront.net/_uploads/galleries/18743/theavenegers22806119d74ptwt3.jpg",
// 	"http://static.comicvine.com/uploads/original/12/123441/3588197-3150345-8768287685-the-av.jpeg",
// 	"http://captainamericanews.files.wordpress.com/2014/04/0a2107702-all_avengers_forever.jpg",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5whXDsNMc3RvN3RMgo64GMnM87FuWh71F9eeTOiLLXkG0FpU",
// 	"http://img3.wikia.nocookie.net/__cb20120207200038/marvelmovies/images/a/a3/The_Avengers-1.jpg",
// 	"http://www.moviedeskback.com/wp-content/gallery/aside-from-post-gallery/the-avengers-collage-wallpapers-2.jpg",
// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjwg4a0UiDMEXBFjMzO_DSMYxnTtMTeTZdDJ0s3-nyKyYsxyt2w",
// 	"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNmZ_AtnrxhQIEBJAGQsVzTMxRRMVJVI9-tHqDtKYVvB8yKgWW",
// ];


	// 첫번째 그림 놓기
	//selected.removeChild(selected.children[0]);
	//selected.appendChild(temparea.children[0]);
	
	// var firstimg = new Image();
	// firstimg.src = images[0];
	// firstimg.onload = function(){
	// 	selected.removeChild(selected.children[0]);
	// 	selected.appendChild(this);
	// 	setImgSize(selected.children[0]);
	// 	setImgMargin(selected.children[0]);
	// };
	/*
	// img 목록에 있는 사진들을 temparea에 추가
	for( var i=1 ; i<images.length ; i++ ){
		var img = new Image();
		img.src = images[i];
		temparea.appendChild(img);
	}
	*/


		// temparea에 저장해둔 이미지 사이즈 정하기
	// for (var i=0; i<temparea.children.length ; i++){
	// 	setImgSize(temparea.children[i]);
	// 	setImgMargin(temparea.children[i]);
	// }




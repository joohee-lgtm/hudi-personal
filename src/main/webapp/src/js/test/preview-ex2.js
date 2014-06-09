var preview = {};
var _o = preview;

preview.util = {};

//userDataModel.originalURL
preview.img = {

	md : function(url, order){
		var that = this;
		var o = new Image();
		o.src = url;
		this._img = o;
		// this.order = order;
	},

	ctr : {
		setAll : function(obj){
			var i = obj._img;
			i.addEventListener("load", function(){
				var ctr = _o.img.ctr;
				var i = obj._img;
				i = ctr.getSize(i);
				i = ctr.getmargin(i);
				obj._img = i;
			}, false);
			i.addEventListener("error", function(){
				
			},false);

			return obj;
		},

		getSize : function(img){
			return img;
		},

		getMargin : function(img){
			return img;
		}
	}
};


preview.bgm = {
	md : {

	},
	ctr : {

	}
};

preview.init = {
	loader : function(){
		var orgin = userDataModel.originalURL;
		var _pi = _o.img;
		var img_obj_list = [];
		for (var i=0 ; i<origin.length ; i++){
			var tmp = new _pi.md(origin[i]);
			img_obj_list[i] = setAll(tmp);
		}		
	}
};

preview.play = {

};




// var prev = {};
// var _j = prev;

// prev.util = {
// 	cs : function(obj){
// 		return getComputedStyle(obj);
// 	},

// 	_int : function(pix){
// 		var result = parseInt(text.substring(0,text.length-2));
// 		return result;
// 	}
// };

// prev.img = {
// 	base : {
// 		_width : 640,
// 		_height : 480
// 	}

// 	_size : {
// 		_width : 0,
// 		_height : 0
// 	},

// 	_margin : {
// 		_top : 0,
// 		_left : 0
// 	}

// 	zidx : 0,

// 	create : function(url, idx){
// 		var that = this;
// 		var imgobj = new Image();
// 		var ictr = imgController;
// 		var temp = document.getElementById("temparea");
// 		imgobj.src = url;
// 		that._target = imgobj;
// 		imgobj.addEventListener("load", ictr._load.suc(ctr, that), false);
// 		imgobj.addEventListener("error", ictr._load.err(), false);

// 		return imgobj;
// 	}
// };

// prev.imgController = {
// 	_load : {
// 		suc : function(ctr, imgobj){
// 			ctr.getsize(imgobj);
// 			ctr.getmargin(imgobj);
// 		},
// 		err : function(){
// 			console.log("img load fail");
// 		}
// 	},

// 	imglist : {
// 		origin_img_list : userDataModel.originalURL,
// 		// edited_img_list 
// 		getlist : function(){
// 			var that = this;
// 			var originlist = that.origin_img_list;
// 			var len = that.origin_img_list.length;
// 			var templist = [];
// 			for (var i=0; i<len ; i++){
// 				templist[i] = _j.img.create(originlist[i], i);
// 			}
// 			that.edited_img_list = templist;
// 		}
// 	},

// 	getsize : function(imgobj){
// 		var u = _j.ut;
// 		var t_width = imgobj._size._width = u._int(u.cs(imgobj._target).width); 
// 		var t_height = imgobj._size._height = u._int(u.cs(imgobj._target).height); 
// 		var b_width = imgobj.base._width;
// 		var b_height = imgobj.base._height;

// 		if (t_height < t_width){
// 			t_height = t_height*(b_width/t_width);
// 			t_width = t_width;
// 			if(b_height < t_height){
// 				t_width = t_width*(b_height/t_height);
// 				t_height = b_height;
// 			}
// 		} else if (t_width < t_height){
// 			t_width = t_width * (b_height/t_height);
// 			t_height = b_height;
// 		} else {
// 			if (b_height < b_width){
// 				t_height = t_width = b_height;
// 			} else {
// 				t_height = t_width = b_width;
// 			}
// 		}

// 		imgobj._size._width = t_width;
// 		imgobj._size._height = t_height;
// 	},

// 	getmargin : function(imgobj){
// 		var t_width = imgobj._size._width; 
// 		var t_height = imgobj._size._height;
// 		var b_width = imgobj.base._width;
// 		var b_height = imgobj.base._height;
// 		var t_top_m = imgojb._margin._top;

// 		if(b_height < b_width){
// 			if (t_height < b_height){
// 				imgojb._margin._top = (b_height - t_height)/2;
// 			}
// 		}
// 	}
// };

// prev.playController = {

// };




// imgctr	loadimg	"success
// false"
// setsize	setmargin	playctr	play	"img
// /bgm"
// stop	"img
// // /bgm"


// // col, row 에 해당하는 매트릭스 얻기
// function getSection(matrix, col, row, maxrow){
// 	var p = (col)*maxrow + (row);
// 	var	result = matrix[p];
// 	return result;
// }

// // 00px를 숫자로 바꿔주기
// function toInt(text){
// 	var result = parseInt(text.substring(0,text.length-2));
// 	return result;
// }

// // 이미지 사이즈 설정하기
// function setImgSize(img){
// 	if (img.height < img.width){
// 		img.height = img.height*(400/img.width);
// 		img.width = "400";
// 		if (img.height > 300){
// 			img.width = img.width*(300/img.height);
// 			img.height = "300";	
// 		}
// 	} else if (img.width < img.height){
// 		img.width = img.width*(300/img.height);
// 		img.height = "300";
// 	} else {
// 		img.height = "300";
// 		img.width = "300";
// 	}
// }

// function setImgMargin(img){
// 	if (img.height < 300){
// 		var margin = (300-img.height)/2;
// 		img.style.marginTop = margin + "px";
// 	}
// }

// function imgLoad(imgsrc){
// 	var img = new Image();
// 	img.src = imgsrc;
// 	var temparea = document.getElementById("temparea"); // 구글을 통해 검색된 이미지가 우선 받아질 공간
// 	temparea.appendChild(img);
// 	img.onload = function(){
// 		setImgSize(img);
// 		setImgMargin(img);
// 	};
// }

// function setDefaultImg(){
// 	var img = new Image();
// 	img.src = "./images/nophoto.jpg";
// 	img.onload = function(){
// 		if (selected.children.length != 0){
// 			selected.removeChild(selected.children[0]);
// 			selected.appendChild(img);
// 		} else {
// 			selected.appendChild(img);
// 		}
// 	};
// }

// function clearTemparea(){
// 	var temparea = document.getElementById("temparea"); // 구글을 통해 검색된 이미지가 우선 받아질 공간
// 	var pn = temparea.parentNode;
// 	if (temparea.children.length != 0){
// 		pn.removeChild(temparea);
// 		var newta = document.createElement('section');
// 		newta.id = 'temparea';
// 		pn.appendChild(newta);
// 	}
// }

// // 구간별 시간 설정
// var times = [
// 	1000, 2000, 3000, 1400, 1000, 3000, 1700, 2500, 2100
// ];

// var slide = document.getElementById("slide").children; // 1x1, 1x2, 2x1, 2x2가 저장된 array
// var selected = getSection(slide, 0, 0, 2); // 슬라이드에서 원하는 위치를 선택하는 함수

// var photobt = document.getElementById('create'); // 사진 고르기 버튼
// var resultbt = document.getElementById('resultButton'); // 결과 보기 버튼

// var photo = document.getElementById('photoSelectWrap'); // 사진 고르기 창
// var result = document.getElementById('previewWrap'); // 결과 보기창

// var setting = document.getElementById('setting');
// var playbt = setting.getElementsByTagName('Button')[0];
// var stopbt = setting.getElementsByTagName('Button')[1];

// //처음 create page로 들어갔을 때
// // photo.style.display = "block";
// result.style.display = "none";

// var images = new Array();

// photobt.onclick = function(){
// 	result.style.display = "none";
// 	photo.style.display = "block";
// 	clearTemparea();
// 	setDefaultImg();
// };

// var navi = document.getElementById('navigation');
// var arrange = document.getElementById('arrangePhotos');

// resultbt.onclick = function(){
// 	navi.style.zIndex = arrange.style.zIndex = -2;

// 	result.style.display = "block";
// 	photo.style.display = "none";
// 	images = userDataModel.originalURL;

// 	for (var i=0; i<images.length ; i++){
// 		imgLoad(images[i]);
// 	}

// 	// 첫번째 그림 셋팅
// 	// selected.removeChild(selected.children[0]);
// 	// selected.appendChild(temparea.children[0]);
// };



// window.onclick = function(e){
// 	// if (e.srcElement.offsetParent === document.getElementById('slide')){
// 	// 	result.style.display = "none";
// 	// 	photo.style.display = "block";
// 	// 	navi.style.zIndex = arrange.style.zIndex = 1;
// 	// 	player.stopVideo();
// 	// 	stopSlide(count);
// 	// 	count = 0;
// 	// 	clearTemparea();
// 	// 	setDefaultImg();
// 	// }
// };

// var count = 0;
// var intervalId = null;

// function setSlide(){
// 	temparea.appendChild(selected.children[0]);
// 	selected.appendChild(temparea.children[0]);
// 	count++;
// }

// function stopSlide(count){
// 	clearInterval(intervalId);
// 	var n = temparea.children.length+1;
// 	var remain = count%n;
// 	if (n != 0){
// 		for (var i=0; i<n-remain ; i++){
// 			temparea.appendChild(selected.children[0]);
// 			selected.appendChild(temparea.children[0]);
// 		}
// 	}
// }

// playbt.onclick = function(){
// 	console.log("play");
// 	player.playVideo(); // 유튜브 재생하기
// 	var time = setting.getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;

// 	if (count != 0){
// 		stopSlide(count);
// 		count = 0;
// 	}

// 	intervalId = setInterval(setSlide, time*10);
// };

// stopbt.onclick = function(){
// 	console.log("stop");
// 	player.stopVideo();
// 	stopSlide(count);
// 	count = 0;
// };
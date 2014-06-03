var preview = {};
var _o = preview;

preview.util = {
	px : function(num){
		return num+"px"
	},

	base : {
		_width : 0,
		_height : 0
	},

	ckLen : function(len){
		if (len != 0){
			return true;
		} else {
			return false;
		}
	}
};


/* 
이미지 하나를 객체로 생성 
객체를 생성한 후 기본 설정에 맞게 크기 조정하기 
*/
preview.img = {
	model : function(url){
		this._style = {
			_width : 0,
			_height : 0,
			_marginTop : 0,
		}; 
		var newimg = new Image();
		newimg.src = url;
		this._img = newimg;
		_o.img.ctr.setAllStyle(this);
	},

	ctr : {
		setAllStyle : function(obj){
			var ctr = _o.img.ctr;
			var px = _o.util.px;
			obj._img.addEventListener("load", function(){
				var o = ctr.getSize(obj);
				obj._img.style.width = px(o._style._width);
				obj._img.style.height = px(o._style._height);
				obj._img.style.marginTop = px(o._style._marginTop);
			}, false);

			obj._img.addEventListener("error", function(){
				console.log("img load error");
				obj = null;
			},false);
			return obj._img;
		},

		getSize : function(obj){
			var _i = obj._img;
			var b = _o.util.base;
			if (_i.naturalHeight < _i.naturalWidth){
				obj._style._height = _i.height*(b._width/_i.width);
				obj._style._width = b._width;
				if (obj._style._height > b._height){
					obj._style._width = _i.width*(b._height/_i.height);
					obj._style._height = b._height;
				}
			} else if (_i.naturalWidth < _i.naturalHeight){
				obj._style._width = _i.width*(b._height/_i.height);
				obj._style._height = b._height;
			} else {
				obj._style._height  = b._height;
				obj._style._width = b._height;
			}
			obj = _o.img.ctr.getMargin(obj);
			return obj;
		},

		getMargin : function(obj){
			var b = _o.util.base;
			var px = _o.util.px;
			obj._img.style.marginLeft = "auto";
			if (obj._style._height < b._height){
				var margin = (b._height - obj._style._height)/2;
				obj._style._marginTop = margin;
			}
			return obj;
		}
	}
};


preview.init : {
	setAll : function(startbtn,stopbtn, wid, hei){
		this.setBtn(startbtn, stopbtn);
		this.setFrameSize(wid, hei);
		this.setArea();
	},

	setBtn : function(startbtn, stopbtn) {
		startbtn.addEventListener("click", function(){
			player.playVideo();
			_o.slide._start();
		}, false);
		stopbtn.addEventListener("click", function(){
		    player.stopVideo();
		    _o.slide._stop();
		}, false);
	},

	setFrameSize : function(wid, hei){
		_o.util.base._width = wid;
		_o.util.base._height = hei;
	},

	setArea : function(){
		var slide = document.getElementById("slide");
		var temparea = document.createElement("div");
		temparea.id = "temparea";
		temparea.style.display = "none";
		slide.appendChild(temparea);
	}
};

preview.slide = function(){
	ready : function(urls){

	},

	imgload : function(){

	},
	
};

	// setPlay : function(urls){
	// 	this.setDefaultImg = function(){
	// 		var url = "./src/img/nophoto.jpg";
	// 		var defalt_img_obj = new _o.img.model(url);
	// 		return defalt_img_obj._img;
	// 	};

	// 	this.setFirstImg = function(temparea){
	// 		var len = temparea.children.length;
	// 		var slide = document.getElementById("slide");
	// 		if (len != 0){
	// 			slide.appendChild(temparea.children[0]);
	// 		} else {
	// 			var di = this.setDefaultImg();
	// 			slide.appendChild(di);
	// 		}
	// 	}

	// 	this.imgLoad = function(urls){
	// 		var ta = document.getElementById("temparea");
	// 		var slide = document.getElementById("slide");
	// 		if(_o.util.ckLen(urls.length)){
	// 			for(var i=0; i<urls.length; i++){
	// 				var tempimg = new _o.img.model(urls[i]);
	// 				ta.appendChild(tempimg._img);
	// 			}
	// 		}
	// 		this.setFirstImg(ta);
	// 	};

	// 	this.setArea = function(){
	// 		var slide = document.getElementById("slide");
	// 		var temparea = document.createElement("div");
	// 		temparea.id = "temparea";
	// 		temparea.style.display = "none";
	// 		slide.appendChild(temparea);
	// 	}

	// 	this.clearArea = function(){
	// 		var slide = document.getElementById("slide");
	// 		while(slide.children.length != 0){
	// 			slide.removeChild(slide.children[0]);
	// 		}
	// 	}
	// 	this.clearArea();
	// 	this.setArea();
	// 	this.imgLoad(urls);
	// },

	// setbgm : function(){

	// }

preview.play = {
	count : 0,
	intervalId : null,
	slide : document.getElementById("slide"),
	// tempa : document.getElementById("slide").getElementById("temparea"),
	setting : document.getElementById("setting"),

	_start : function(){
		var t = this;
		console.log(t);
		var time = t.setting.getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;
		if (t.count != 0){
			t._stop();
			// t.gotoInitImg(t.count);
			// t.count = 0;
		}
		t.intervalId = setInterval(t.setSlide, time*10);
	},

	_stop : function(){
		var t = this;
		clearInterval(t.intervalId);
		t.gotoInitImg();
		t.count = 0;
	},

	setSlide : function(){
		var t = this;
		var temparea = document.getElementById("temparea");
		var slide = document.getElementById("slide");
		temparea.appendChild(slide.children[1]);
		slide.appendChild(temparea.children[0]);
		t.count++;
	},

	gotoInitImg : function(){
		var t = this;
		var n = t.temparea.children.length + 1;
		var remain = t.count%n;
		if (n != 0){
			for (var i=0 ; i<n-remain ; i++){
				t.temparea.appendChild(slide.children[1]);
				t.slide.appendChild(temparea.children[0]);
			}
		}
	}
};

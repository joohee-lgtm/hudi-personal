/* for result mobile */

var result = {};
var _o = result;
result.util = {
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
	},

	getDefaultImg : function(){
		var url = "/img/nophoto.jpg"; // nophoto
		var defalt_img_obj = new _o.img.model(url);
		return defalt_img_obj._img;
	}
};


/* 
이미지 하나를 객체로 생성 
객체를 생성한 후 기본 설정에 맞게 크기 조정하기 
*/
result.img = {
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
				obj._img.src = "./img/nophoto.jpg";
				var o = ctr.getSize(obj);
				obj._img.style.width = px(o._style._width);
				obj._img.style.height = px(o._style._height);
				obj._img.style.marginTop = px(o._style._marginTop);
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


result.init = {
	slide : document.getElementById("slide"),

	setAll : function(startbtn,stopbtn, wid, hei){
		this.setBtn(startbtn, stopbtn);
		this.setFrameSize(wid, hei);
		this.setArea();
	},

	setBtn : function(startbtn, stopbtn) {
		startbtn.addEventListener("touchstart", function(){
			player.playVideo();
//			_o.play.ready();
//			_o.play._start();
		}, false);
		stopbtn.addEventListener("touchstart", function(){
		    player.stopVideo();
		    _o.play._stop();
		}, false);
	},

	setFrameSize : function(wid, hei){
		_o.util.base._width = wid;
		_o.util.base._height = hei;
	},

	setArea : function(){
		var temparea = document.createElement("div");
		temparea.id = "temparea";
		temparea.style.display = "none";
		this.slide.appendChild(temparea);
	},

	setDefaultImg : function(){
		var defaultimg = _o.util.getDefaultImg();
		slide.appendChild(defaultimg);
	}
};

result.slide = {
	slide : document.getElementById("slide"),
	_set : function(urls){
		this.urls = urls;
		this.clearArea();
		this.setFirstImg();
		this.loadOtherImgs();
	},

	loadOtherImgs : function(){
		var t = this;
		var temparea = this.slide.getElementsByTagName("div")[0];
		var len = t.urls.length;
		for (var i=1 ; i<len ; i++){
			var iobj = new _o.img.model(t.urls[i]);
			temparea.appendChild(iobj._img);
		}
	},

	clearArea : function(){
		var temparea = this.slide.getElementsByTagName("div")[0];
		var firstimg = this.slide.getElementsByTagName("img")[0];
		var len = temparea.children.length;
		while (_o.util.ckLen(len)){
			temparea.removeChild(temparea.children[0]);
			len = temparea.children.length;
		}
		if (firstimg != null){
			this.slide.removeChild(this.slide.children[1]);
		}
	},

	setFirstImg : function(){
		var t = this;
		
		if (t.urls.length != 0){
			 var firstimg = new _o.img.model(t.urls[0]);
			 slide.appendChild(firstimg._img);
		} else {
			var defaultimg = _o.util.getDefaultImg();
			slide.appendChild(defaultimg);
		}
	}
};

result.play = {
	ready : function(){
		this.count = 0;
		this.intervalId = 0;
		this.total_img_len = 
		this.slide = document.getElementById("slide");
		this.temparea = this.slide.getElementsByTagName("div")[0];
		this.speed = 0;
	},

	_start : function(){
		var t = this;
		var setting = document.getElementById("setting");
		t.speed = jamjar.sec_per_img;
		if (this.count === 0){
		} else {
			t._stop();
			t.count = 0;
		}
		t.intervalId = setInterval(t.setSlide, t.speed*10);
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
		temparea.appendChild(slide.children[1]);
		t.slide.appendChild(temparea.children[0]);
		_o.play.count++;
	},

	gotoInitImg : function(){
		var t = this;
		var total_img_len = _o.slide.urls.length;
		var remain = t.count%total_img_len;
		if (remain != 0){
			for (var i=0 ; i<total_img_len - remain ; i++){
				t.setSlide();
			}
		}
	}
};

var btn = document.getElementById("btn");
var startbtn = btn.getElementsByTagName("button")[0];
var stopbtn = btn.getElementsByTagName("button")[1];

var toInt = function(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
};

var wid = window.getComputedStyle(slide).width;
var hei = window.getComputedStyle(slide).height;

_o.init.setAll(startbtn, stopbtn, toInt(wid), toInt(hei));

var urls = userDataModel.originalURL;
_o.slide._set(urls);

var preview = {};
var _o = preview;

preview.util = {
	px : function(num){
		return num+"px"
	},

	base : {
		_width : 640,
		_height : 480
	}
};

//userDataModel.originalURL
preview.img = {

	md : function(url){
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
				if (_i.height > b._height){
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
				img.style.marginTop = px(margin);
			}
			return obj;
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

	setArea : {
		totalArea : function(){
			var slide = document.getElementById("slide");
			_o.init.setArea.playArea(slide);
			_o.init.setArea.tempArea(slide);
		},

		playArea : function(slide){
			var di = _o.init.setDefaultImg();
			slide.appendChild(di);
		},

		tempArea : function(slide){
			var temparea = document.createElement("div");
			temparea.id = "temparea";
			temparea.style.display = "none";
			slide.appendChild(temparea);
			this.a = temparea;
		}
	},

	setDefaultImg : function(){
		var oi = _o.img;
		var url = "./src/img/nophoto.jpg";
		var defalt_img_obj = new oi.md(url);
		return defalt_img_obj._img;
	},

	imgloader : function(){
		var origin = userDataModel.originalURL;
		console.log(origin);
		var _pi = _o.img;
		var img_obj_list = [];
		var ta = _o.init.setArea.tempArea.a
		for (var i=0 ; i<origin.length ; i++){
			var tmp = new _pi.md(origin[i]);
			img_obj_list[i] = tmp;
			console.log(img_obj_list[i]._img);
			// ta.appendChild(img_obj_list[i]._img);
		}
	},

	setbgm : function(){

	}
};

preview.play = {

};


_o.init.setArea.totalArea();








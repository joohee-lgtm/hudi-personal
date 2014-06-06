var Featured = {};
var _o = Featured;

Featured.base = {
	arr : [],
	_width 	: 358,
	_margin : 40,
	
	num : {
		len : 0,
		row		: 0,
		column 	: 0,
		remain 	: 0
	},

	winsize : {
		max : 1200,
		min : 800
	}
};

Featured.util = {
	toInt : function(text){
		var result = parseInt(text.substring(0,text.length-2));
		return result;
	},
	
	gcst : function(obj){
		return getComputedStyle(obj);
	}
}

Featured.jar = {
	model : function(jarobj){
		var t = this;
		t.li;
		_o.jar.create._all(jarobj, t);
	},

	create : {
		_all : function(jarobj, that){
			var text;
			var li = document.createElement("li");
			var u_ele = this._User(jarobj.title);
			var tn_ele = this._Tn(jarobj.tb_url, that);
			var desc_ele = this._Desc(jarobj.date_created);
			li.appendChild(u_ele);
			li.appendChild(tn_ele);
			li.appendChild(desc_ele);
			that.li = _o.jar.support.setId(li, jarobj.j_id);
		},

		_User : function(username){
			var span = document.createElement("span");
			var text = document.createTextNode(username);
			span.class = "username";
			span.appendChild(text);
			return span;
		},

		_Tn : function(url, that){
			var resize;
			var img = new Image();			

			img.src = url;
			img.addEventListener("load",function(){
				_o.jar.support.setsize(img, that);
			}, false);
			img.addEventListener("error", function(){
				img.src = "./src/img/nophoto.jpg";
				_o.jar.support.setsize(img, that);
			}, false);
			return img;
		},

		_Desc : function(desc){
			var span = document.createElement("span");
			var text = document.createTextNode(desc);
			span.class = "description";
			span.appendChild(text);
			return span;
		}
	},
	
	support : {
		setsize : function(img, that){
			var t_width = img.naturalWidth;
			var t_height = img.naturalHeight;
			var b_width = _o.base._width;
			img.style.width = b_width + "px";
			img.style.height = b_width*(t_height/t_width) + "px";
			that._height = b_width*(t_height/t_width);
		},
		setId : function(li, id){
			li.id = id;
			return li;
		}
	}
};

Featured.init = {
	re_jar_array : [], 
	getjars : function(jarobjs){
		var featured = document.getElementById("featured");
		var ul = featured.getElementsByTagName("ul")[0];
		var len = jarobjs.length;
		for (var i=0 ; i<len ; i++){
			var jar = new Featured.jar.model(jarobjs[i]);
			ul.appendChild(jar.li);
			this.re_jar_array[i] = jar;
		}
		for (var i=0; i<ul.children.length ; i++){
			var targ = ul.children[i];
			targ.addEventListener("click", function(e){
				var url = "collageJam/result?id=" + targ.id;
				window.location = url;
			}, false);
		};
	},

	setjars : function(jarobjs){
		var win_size = window.innerWidth;
		var featured = document.getElementById("featured");
		var ul = featured.getElementsByTagName("ul")[0];
		var len = jarobjs.length;

		var get = {
			_Len : function(len){
				return len;
			},
			_Row : function(win_size){
				var max = _o.base.winsize.max;
				var min = _o.base.winsize.min;
				if (win_size < min) {
					return 1;
				} else if (win_size >= min && win_size < max){
					return 2;
				} else if (win_size >= max) {
					return 3;
				}
			},
			_Column : function(){
				var num = _o.base.num;
				var col = parseInt(num.len/num.row);
				return col;
			},
			_Remain : function(){
				var num = _o.base.num;
				var remain = num.len%num.row;
				return remain;
			}
		};

		var createMatrix = function(lis){
			var matrix = [];
			var b = _o.base.num;
			var c;
			if (b.remain != 0){
				c = b.column; 
			} else {
				c = b.column - 1;
			}
			for (var i=0 ; i<= c ; i++){
				matrix[i] = [];
				for (var j=0 ; j<b.row ; j++){
					matrix[i][j] = lis[i*b.row + j];
				}
			}
			return matrix;
		}

		_o.base.num.len = get._Len(len);
		_o.base.num.row = get._Row(win_size);
		_o.base.num.column = get._Column();
		_o.base.num.remain = get._Remain();
		_o.base.arr = createMatrix(this.re_jar_array);
	},

	posjars : {
		_all : function(){
			this.posFirstGroup(_o.base.arr);
			this.posMiddleGroup(_o.base.arr);
			this.posLastGroup(_o.base.arr);
			this.setUlHeight(_o.base.arr);
		},

		setUlHeight : function(){
			var featured = document.getElementById("featured");
			var ul = featured.getElementsByTagName("ul")[0];
			var s = this.support;
			var lis = ul.children;
			var u = Featured.util;
			var objarr = [];
			for (var i=0; i<lis.length ; i++){
				var tempobj = {
					li : lis[i]
				};
				objarr[i] = tempobj;
			}
			objarr = s.ascendingBottom(objarr);
			var lasttop = u.toInt(u.gcst(objarr[lis.length-1].li).top);
			var lastheight = u.toInt(u.gcst(objarr[lis.length-1].li).height);
			var last = lasttop + lastheight + 200;
			ul.style.height = last + "px";
		},

		posFirstGroup : function(liarr){
			var b = _o.base;
			for (var i=0; i<b.num.row ; i++){
				liarr[0][i].li.style.top = "20px";
				liarr[0][i].li.style.left = (20*(i+1) + b._width*i) + "px";
			}
		},
		
		posMiddleGroup : function(liarr){
			var b = _o.base;
			for (var i=1 ; i<b.num.column ; i++){
				this.arrInGroup(i, liarr);
			}
		},

		arrInGroup : function(curcol, liarr){
			var b = _o.base.num;
			var prevcol = curcol - 1;
			var baseObjArray = [];
			var s = this.support;
			var u = _o.util;
			for (var i=0 ; i<b.row ; i++){
				baseObjArray[i] = liarr[prevcol][i];
			}
			baseObjArray = s.ascendingBottom(baseObjArray);
			for (var i=0 ; i<b.row ; i++){
				var left = u.toInt(u.gcst(baseObjArray[i].li).left);
				var top = 20 + s.getBottom(baseObjArray[i]);
				liarr[curcol][i].li.style.left = left + "px";
				liarr[curcol][i].li.style.top = top +"px";
			}
		},

		posLastGroup : function(liarr){
			var b = _o.base.num;
			var baseObjArray = [];
			var s = this.support;
			var u = _o.util;

			for (var i=0 ; i<b.remain ; i++){
				baseObjArray[i] = liarr[b.column-1][i];
			}
			baseObjArray = s.ascendingBottom(baseObjArray);
			if (b.remain != 0){
				for(var i=0 ; i<b.remain ; i++){
					var top = s.getBottom(baseObjArray[i]) + 20;
					liarr[b.column][i].li.style.left = u.gcst(baseObjArray[i].li).left;
					liarr[b.column][i].li.style.top = top+"px";
				}
			}
		},

		featuredMargin : function(){
			
		},
		featuredHeight : function(){
		
		},
		support : {
			getBottom : function(obj){
				var u = _o.util;
				var st = u.gcst(obj.li);
				var li_height = u.toInt(st.height);
				var li_top = u.toInt(st.top);
				var bottom = li_height + li_top;
				return bottom;
			},
			
			ascendingBottom : function(objArray){
				var len = objArray.length;
				for (var i=0; i<len ; i++){
					for (var j=i+1 ; j<len ; j++){
						var pos = this.getBottom(objArray[i]);
						var posNext = this.getBottom(objArray[j]);
						if (pos > posNext){
							var temp = objArray[i];
							objArray[i] = objArray[j];
							objArray[j] = temp;
						}
					}
				}
				return objArray;
			},
			toInt : function(text){

			}
		}
	}
}


var ScrollEvent = {
	disableVerticalScroll : function(){
		window.onmousewheel = this.wheel;
		document.onkeydown = this.keydown;
	},

	keydown : function(e){
		leftKey = 37;
		rightKey = 39;
		if (e.keyCode === leftKey || e.keyCode === rightKey){
			e.preventDefault();
		}
	},

	wheel : function(e){
		if (e.wheelDeltaX != 0){
			e.preventDefault();
		}
	}
};


_o.init.getjars(jarobjs);
_o.init.setjars(jarobjs);
ScrollEvent.disableVerticalScroll();

window.addEventListener("load", function(){
	_o.init.posjars._all();
}, false);

window.addEventListener("resize",function(){
	_o.init.setjars(jarobjs);
	_o.init.posjars._all();
},false);






window.addEventListener('load',function(){
	Featured.posAll();
	ScrollEvent.disableVerticalScroll();
}, false);

window.addEventListener('resize',function(){
	Featured.posAll();
}, false);

var Featured = {
	jarArray : document.getElementById('featured').getElementsByTagName('div')[0].children,
	row : 0,
	column : 0,
	remain : 0,

	jar : { 
		jWidth:400, 
		jMargin:40 
	}
};

<<<<<<< HEAD
/* setting about featured start */
=======
Featured.util = {
	toInt : function(text){
		var result = parseInt(text.substring(0,text.length-2));
		return result;
	},
	
	gcst : function(obj){
		return getComputedStyle(obj);
	}
}
>>>>>>> refs/heads/slidefix

<<<<<<< HEAD
Featured.Setting = function(){
	var inner = window.innerWidth;
	this.row = this.getRow(inner);
	this.column = this.getColumn();
	this.remain = this.getRemain();
};
=======
Featured.jar = {
	model : function(jarobj){
		var t = this;
		t.li;
		_o.jar.create._all(jarobj, t);
	},
>>>>>>> refs/heads/slidefix

<<<<<<< HEAD
Featured.getRow = function(inner){
	if (inner > 1200){ //1200 보다 큰 경우
		return 3;
	} else { // 1200 보다 작은 경우
		if ( inner > 800 ){ // 1200보다 작은 경우, 800보다 큰 경우
			return 2;
		} else { // 1200보다 작은 경우, 800보다 작은 경우 
			return 1;
=======
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
			_o.jar.support.setId(li, jarobj.j_id);
			that.li = li;
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
			li.addEventListener("click", function(){
				var url = "/collageJam/result?id="+id;
				window.location = url;
			}, false);
>>>>>>> refs/heads/slidefix
		}
	}
};

<<<<<<< HEAD
Featured.getColumn = function(){
	return parseInt(this.jarArray.length/this.row);
};
=======
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
	},
>>>>>>> refs/heads/slidefix

Featured.getRemain = function(){
	return this.jarArray.length%this.row;
};

/* setting about featured end */


<<<<<<< HEAD
=======
		_o.base.num.len = get._Len(len);
		_o.base.num.row = get._Row(win_size);
		_o.base.num.column = get._Column();
		_o.base.num.remain = get._Remain();
		_o.base.arr = createMatrix(this.re_jar_array);
	},
>>>>>>> refs/heads/slidefix

<<<<<<< HEAD
/* used function in featured start */

Featured.ascendingBottom = function(objArray){
	var len = objArray.length;
	for (var i=0; i<len ; i++){
		for (var j=i+1 ; j<len ; j++){
			var pos = this.getBottom(objArray[i]);
			var posNext = this.getBottom(objArray[j]);
			if (pos > posNext){
				var temp = objArray[i];
				objArray[i] = objArray[j];
				objArray[j] = temp;
=======
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
			console.log(ul);
			for (var i=0; i<lis.length ; i++){
				var tempobj = {
					li : lis[i]
				};
				objarr[i] = tempobj;
			}
			objarr = s.ascendingBottom(objarr);
			var lasttop = u.toInt(u.gcst(objarr[lis.length-1].li).top);
			var lastheight = u.toInt(u.gcst(objarr[lis.length-1].li).height);
			var last = lasttop + lastheight
			ul.style.height = last + "px";
		},

		posFirstGroup : function(liarr){
			var b = _o.base;
			for (var i=0; i<b.num.row ; i++){
				liarr[0][i].li.style.top = "0px";
				liarr[0][i].li.style.left = b._width*i + "px";
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
			for (var i=0 ; i<b.row ; i++){
				baseObjArray[i] = liarr[prevcol][i];
			}
			baseObjArray = s.ascendingBottom(baseObjArray);
			for (var i=0 ; i<b.row ; i++){
				liarr[curcol][i].li.style.left = getComputedStyle(baseObjArray[i].li).left;
				liarr[curcol][i].li.style.top = s.getBottom(baseObjArray[i])+"px";
			}
		},

		posLastGroup : function(liarr){
			var b = _o.base.num;
			var baseObjArray = [];
			var s = this.support;

			for (var i=0 ; i<b.remain ; i++){
				baseObjArray[i] = liarr[b.column-1][i];
			}
			baseObjArray = s.ascendingBottom(baseObjArray);
			if (b.remain != 0){
				for(var i=0 ; i<b.remain ; i++){
					liarr[b.column][i].li.style.left = getComputedStyle(baseObjArray[i].li).left;
					liarr[b.column][i].li.style.top = s.getBottom(baseObjArray[i])+"px";
					
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

>>>>>>> refs/heads/slidefix
			}
		}
	}
	return objArray;
};

<<<<<<< HEAD
Featured.descendingBottom = function(objArray){
	var len = objArray.length;
	for (var i=0; i<len ; i++){
		for (var j=i+1 ; j<len ; j++){
			var pos = this.getBottom(objArray[i]);
			var posNext = this.getBottom(objArray[j]);
			if (pos < posNext){
				var temp = objArray[i];
				objArray[i] = objArray[j];
				objArray[j] = temp;
			}
		}
	}
	return objArray;
};
=======

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
>>>>>>> refs/heads/slidefix

<<<<<<< HEAD
Featured.toInt = function(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
};

Featured.getBottom = function(obj){
	var style = getComputedStyle(obj);
	var bottom = this.toInt(style.top) + this.toInt(style.height) + this.jar.jMargin;
	return bottom;
};

/* used function in featured end */
=======
window.addEventListener("resize",function(){
	_o.init.setjars(jarobjs);
	_o.init.posjars._all();
},false);
>>>>>>> refs/heads/slidefix




/* set jar position function in featured start */

Featured.posJars = function(){
	this.posFirstGroup();
	this.posOtherGroup();
	this.featuredMargin();
	this.featuredHeight();
};

Featured.posFirstGroup = function(){
	for(var i=0 ; i<this.row ; i++){
		this.jarArray[i].style.left = this.jar.jWidth*i + "px";
		this.jarArray[i].style.top = "0px";
	}
};

Featured.posOtherGroup = function(){
	for (var i=1 ; i<=this.column ; i++){
		var BEFORE = (i-1)*this.row;
		var CURRENT = i*this.row;

		if (i != this.column){ // 마지막 줄이 아닐 때
			this.posInGroup(BEFORE, CURRENT, this.row);
		} else { // 마지막줄일 때
			this.posInGroup(BEFORE, CURRENT, this.remain);
		}
	}
};

Featured.posInGroup = function(BEFORE, CURRENT, REMAIN){
	var baseObjArray = [];
	for (var c=0 ; c<this.row ; c++){
		baseObjArray[c] = this.jarArray[BEFORE+c];
	}
	baseObjArray = this.ascendingBottom(baseObjArray);
	for(var c=0; c<REMAIN ; c++){
		this.jarArray[CURRENT+c].style.left = getComputedStyle(baseObjArray[c]).left;
		this.jarArray[CURRENT+c].style.top = this.getBottom(baseObjArray[c]) + "px";
	}
};

Featured.featuredMargin = function(){
	this.jarArray[0].parentNode.style.width = this.jar.jWidth*this.row + "px";
};

Featured.featuredHeight = function(){
	var deArray = Array(this.row);
	for (var i=0; i<this.row ; i++){
		deArray[i] = this.jarArray[(this.jarArray.length-1)-i];
	}
	deArray = this.descendingBottom(deArray);
	this.jarArray[0].parentNode.style.height = this.getBottom(deArray[0]) + "px";
};

Featured.posAll = function(){
	this.Setting();
	this.posJars();
};

/* set jar position function in featured end */



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

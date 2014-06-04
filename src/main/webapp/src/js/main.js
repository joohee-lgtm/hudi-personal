var jarobjs 
	 = [{jid : 1, uname : "u1", desc : "aaa",
			tn : "http://livedoor.blogimg.jp/linetw_mkt/imgs/f/a/faf4b868.png"},
		{jid : 2, uname : "u2", desc : "bbb",
			tn : "http://1.bp.blogspot.com/-AlE59EKecfc/UwM3Z2pgVnI/…T-I/s1600/Line%2Bwith%2BLeonard%2Band%2BSally.JPG"},
		{jid : 3, uname : "u3", desc : "ccc",
			tn : "http://www.roykooni.com/wp-content/uploads/leonard-line-theme.jpg"},
		{jid : 4, uname : "u1", desc : "ddd",
			tn : "http://www.line.polppolservice.com/getpng/stickers/sticker1775.png"},
		{jid : 5, uname : "u2", desc : "eee",
			tn : "http://l.lnwfile.com/85ef0v.png"},
		{jid : 6, uname : "u2", desc : "eee",
			tn : "http://www.roykooni.com/wp-content/uploads/leonard-line-theme.jpg"},
		{jid : 7, uname : "u2", desc : "eee",
			tn : "http://www.roykooni.com/wp-content/uploads/leonard-line-theme.jpg"}
		];

var Featured = {};
var _o = Featured;

Featured.base = {
	arr : [],
	_width 	: 360,
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


Featured.jar = {
	model : function(jarobj){
		this.li = _o.jar.create.all(jarobj);
		this._height = 0;
		this._top = 0;
		this._left = 0;
	},

	create : {
		all : function(jarobj){
			var text;
			var li = document.createElement("li");
			li.id = jarobj.jid;
			var u_ele = this._User(jarobj.uname);
			var tn_ele = this._Tn(jarobj.tn);
			var desc_ele = this._Desc(jarobj.desc);
			li.appendChild(u_ele);
			li.appendChild(tn_ele);
			li.appendChild(desc_ele);
			return li;
		},

		_User : function(username){
			var span = document.createElement("span");
			var text = document.createTextNode(username);
			span.class = "username";
			span.appendChild(text);
			return span;
		},

		_Tn : function(tnurl){
			var img = new Image();
			var setsize = function(img){
				var t_width = img.naturalWidth;
				var t_height = img.naturalHeight;
				var b_width = _o.base._width;
				img.style.width = b_width;
				img.style.height = b_width*(t_height/t_width);
				return img;
			};

			img.src = tnurl;
			img.addEventListener("load",function(){
				setsize(img);
			}, false);
			img.addEventListener("error", function(){
				img.src = "./src/img/nophoto.jpg";
				setsize(img);
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
};

Featured.init = {
	getjars : function(jarobjs){
		var featured = document.getElementById("featured");
		var ul = featured.getElementsByTagName("ul")[0];
		var len = jarobjs.length;
		for (var i=0 ; i<len ; i++){
			var jar = new Featured.jar.model(jarobjs[i]);
			ul.appendChild(jar.li);
		}
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
		_o.base.arr = createMatrix(ul.children);
	},

	posjars : {

		_all : function(){
			this.posFirstGroup(_o.base.arr);
			this.posMiddleGroup(_o.base.arr);
			this.posLastGroup(_o.base.arr);
		},

		posFirstGroup : function(liarr){
			var b = _o.base;
			for (var i=0; i<b.num.row ; i++){
				liarr[0][i].style.top = "0px";
				liarr[0][i].style.left = b._width*i + "px";
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
				liarr[curcol][i].style.left = getComputedStyle(baseObjArray[i]).left;
				liarr[curcol][i].style.top = "0px";
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
					liarr[b.column][i].style.left = getComputedStyle(baseObjArray[i]).left;
					liarr[b.column][i].style.top = "0px";
				}
			}
		},
		
		// arrInGroup : function(ul, BEFORE, CURRENT, REMAIN){
		// 	console.log(BEFORE, CURRENT, REMAIN);
		// 	var baseObjArray = [];
		// 	var b = _o.base.num;
		// 	var s = this.support;
		// 	for (var c=0 ; c<b.row ; c++){
		// 		baseObjArray[c] = ul.children[BEFORE+c];
		// 	}
		// 	baseObjArray = s.ascendingBottom(baseObjArray);
		// 	for(var c=0; c<REMAIN ; c++){
		// 		// ul.children[CURRENT+c].style.left = getComputedStyle(baseObjArray[c]).left;
		// 		// ul.children[CURRENT+c].style.top = s.getBottom(baseObjArray[c]) + "px";
		// 	}
		// },

		featuredMargin : function(){
		
		},
		featuredHeight : function(){
		
		},
		support : {
			getBottom : function(obj){

			},
			ascendingBottom : function(objArray){
				return objArray;
			},
			toInt : function(text){

			}
		}
	}
}

_o.init.getjars(jarobjs);
_o.init.setjars(jarobjs);
_o.init.posjars._all();

window.addEventListener("resize",function(){
	_o.init.setjars(jarobjs);
	_o.init.posjars._all();
},false);


// var j = new _o.jar.model(jarobjs[1]);
// console.log(j.li);




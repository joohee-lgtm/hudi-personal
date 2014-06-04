var jarobjs 
	 = [{jid : 1, uname : "u1", desc : "aaa",
			tn : "http://livedoor.blogimg.jp/linetw_mkt/imgs/f/a/faf4b868.png"},
		{jid : 2, uname : "u2", desc : "bbb",
			tn : "http://1.bp.blogspot.com/-AlE59EKecfc/UwM3Z2pgVnI/…T-I/s1600/Line%2Bwith%2BLeonard%2Band%2BSally.JPG"},
		{jid : 3, uname : "u3", desc : "ccc",
			tn : "http://www.roykooni.com/wp-content/uploads/leonard-line-theme.jpg"},
		{jid : 4, uname : "u1", desc : "ddd",
			tn : "http://www.line.polppolservice.com/getpng/stickers/sticker1775.png"},
		{jid : 4, uname : "u2", desc : "eee",
			tn : "http://l.lnwfile.com/85ef0v.png"}];

var Featured = {};
var _o = Featured;

Featured.base = {
	_width 	: 360,
	_margin : 40,
	row		: 0,
	column 	: 0,
	remain 	: 0
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
		var len = ul.children.length;
		for (var i=0 ; i<len ; i++){
			var jar = new Featured.jar.model(jarobjs[i]);
			ul.appendChild(jar.li);
		}
	},

	setjars : function(){
		var win_size = window.innerWidth;
		var featured = document.getElementById("featured");
		var ul = featured.getElementsByTagName("ul")[0];
		var len = ul.children.length;

		var get = {
			_Row : function(win_size){
				if (win_size < 800) {
					_o.base.row = 1;
				} else if (800 <= win_size < 1200){
					_o.base.row = 2;
				} else {
					_o.base.row = 3;
				}
			},
			_Column : function(len){
				var col = parseInt(len/_o.base.row);
				_o.base.column = col;
			},
			_Remain : function(len){
				var remain = len%_o.base.row;
				_o.base.remain = remain;
			}
		}

		get._Row();
		get._Column();
		get._Remain();
	}
}

_o.init.getjars(jarobjs);

window.addEventListener("resize",function(){
	_o.init.setjars();
},false);


// var j = new _o.jar.model(jarobjs[1]);
// console.log(j.li);




/* for create desktop web */

var player;
var work = {

	o : document.getElementById("navigation").getElementsByTagName("li"),
	
	init : function(){
		var that = this;
		that.st.bl(that.sect.photo.area);
		that.st.no(that.sect.music.area);
		that.st.no(that.sect.preview.area);
		that.st.no(that.sect.preview.bg);
	},

	set : function(){
		var that = this;
		var setbt = function(t){
			t.photo.bt = that.o[0];
			t.music.bt = that.o[1];
			t.preview.bt = that.o[2];
		}

		var setevt = function(sect, tg){
			tg.bt.addEventListener("click",function(){
				tg.evt(sect);
			},false);
		}

		var setarea = function(t){
			t.photo.area = document.getElementById("photoSelectWrap");
			t.music.area = document.getElementById("musicSelectWrap");
			t.preview.area = document.getElementById("previewWrap");
		}

		setbt(that.sect);
		setarea(that.sect);
		setevt(that.sect, that.sect.photo);
		setevt(that.sect, that.sect.music);
		setevt(that.sect, that.sect.preview);
		that.sect.preview.closebt();
	},

	st : {
		bl : function(obj){
			obj.style.display = "block";
		},
		no : function(obj){
			obj.style.display = "none";
		}
	},

	sect : {
		photo : {
			// bt, area
			evt : function(sect){
				this.area.style.display = "block";
				sect.music.area.style.display = "none";
				sect.preview.area.style.display = "none";
			}
		},

		music : {
			// bt, area
			evt : function(sect){
				this.area.style.display = "block";
				sect.photo.area.style.display = "none";
				sect.preview.area.style.display = "none";
			}
		},

		preview : {
			bg : document.getElementById("bg"),
			// bt, area
			evt : function(sect){
				var that = this;
				that.area.style.display = "block";
				that.bg.style.display = "block";
				var prev = document.getElementById("previewWrap")
				prev.addEventListener('wheel', function(e){
					e.preventDefault();
				}, false);
				var head = document.getElementsByTagName("header")[0];
				head.addEventListener('wheel', function(e){
					e.preventDefault();
				}, false);
				var urls = userDataModel.originalURL;
				_o.slide._set(urls);
				stopYtInSelectMusic();
				putBgmAtPreview();
			},

			closebt : function(){
				var that = this;
				var clbt = that.area.children[0].children[0];
				clbt.addEventListener("click", function(){
					that.area.style.display = "none";
					that.bg.style.display = "none";
				    player.stopVideo();
				    _o.play._stop();
				},false);
			}
		}
	}
}


work.set();
work.init();




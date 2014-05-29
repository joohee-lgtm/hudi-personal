
var work = {

	o : document.getElementById("navigation").getElementsByTagName("li"),
	
	init : function(){
		var t = this;
		t.st.bl(t.sect.photo);
		t.st.no(t.sect.music);
		t.st.no(t.sect.preview);
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
			obj.area.style.display = "block";
		},
		no : function(obj){
			obj.area.style.display = "none";
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
			// bt, area
			evt : function(sect){
				this.area.style.display = "block";
				var nav = document.getElementById("navigation");
				var arg = document.getElementById("arrangePhotos");
			},

			closebt : function(){
				var that = this;
				var clbt = that.area.children[0];
				clbt.addEventListener("click", function(){
					that.area.style.display = "none";
					var nav = document.getElementById("navigation");
					var arg = document.getElementById("arrangePhotos");
				},false);
			}
		}
	}
}

work.set();
work.init();

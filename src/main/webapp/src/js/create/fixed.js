
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

		var setevt = function(obj){
			obj.bt.addEventListener("click",function(){
				obj.evt();
			},false);
		}

		var setarea = function(t){
			t.photo.area = document.getElementById("photoSelectWrap");
			t.music.area = document.getElementById("musicSelectWrap");
			t.preview.area = document.getElementById("previewWrap");
		}

		setbt(that.sect);
		setarea(that.sect);
		setevt(that.sect.photo);
		setevt(that.sect.music);
		setevt(that.sect.preview);
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
			evt : function(){
				st.bl()
			}
		},

		music : {
			evt : function(){
				console.log("music");
			}
		},

		preview : {
			evt : function(){
				console.log("preview");
			}
		}
	}
}

work.set();
work.init();


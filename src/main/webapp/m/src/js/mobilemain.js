function flickingFunc(container, panels){
	this.container = container;
	this.panels = panels;
	this.nTouchStartX = 0;
	this.nTouchStartY = 0;
	this.nTouchEndX = 0;
	this.nTouchEndY = 0;
	this.nTouchDir = 0;
	this.nCurIndex = 0;
	this.nTotalIndex = panels.length;
};


flickingFunc.prototype = {
	attachEvt : function(){
		var that = this;
		document.addEventListener("touchstart", function(e){
			that.nTouchStartX = e.touches[0].clientX;
			that.nTouchStartY = e.touches[0].clientY;
		}, false);
		
		document.addEventListener("touchend", function(e){
			that.nTouchEndX = e.changedTouches[0].clientX;
			that.nTouchEndY = e.changedTouches[0].clientY;
			that.calTouchDir();
		},false);
	},
	
	calTouchDir : function(){
		var mv = this.nTouchStartX - this.nTouchEndX;
		var that = this;
		var max = 10;
		if (mv < max*-1){
			that.nTouchDir = 1;
		} else if (mv > max*1){
			that.nTouchDir = -1;
		} else {
			that.nTouchDir = 0;
		}
		that.movePanel();
	},
	
	movePanel : function(){
		var idx = this.nCurIndex;
		var dir = this.nTouchDir;
		if(dir == 1){
			this.movePanelRight(idx);
		} else if (dir == -1){
			this.movePanelLeft(idx);
		}
	},
	
	movePanelRight : function(curIdx){
		var firstIdx = 0;
		var lastIdx = this.nTotalIndex - 1;
		if (curIdx != 0){
			this.nCurIndex = curIdx - 1;
			var newCurIdx = this.nCurIndex;
			for (var i=0 ; i <= lastIdx ; i++){
				var w = i - newCurIdx;
				var tr = "translate(" + w + "00%, 0px)";
				this.panels[i].style.transform = tr;
				this.panels[i].style.webkitTransform = tr;
			}
		}
	},
	
	movePanelLeft : function(curIdx){
		var firstIdx = 0;
		var lastIdx = this.nTotalIndex - 1;
		if (curIdx != lastIdx){
			this.nCurIndex = curIdx + 1;
			var newCurIdx = this.nCurIndex;
			for (var i=0 ; i <= lastIdx ; i++){
				var w = (i - newCurIdx) * 100;
				var tr = "translate(" + w + "%, 0px)";
				this.panels[i].style.transform = tr;
				this.panels[i].style.webkitTransform = tr;
			}
		}
	}
	
};


window.addEventListener('load', function(){
	var panels = document.getElementsByClassName("flickPanel");
	var flickContainer = document.getElementById("flickContainer");
	var flick = new flickingFunc(flickContainer, panels);
	flick.attachEvt();
}, false);


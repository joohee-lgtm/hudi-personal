function flickingFunc(htObj) {
	this.container = htObj.container;
	this.panels = htObj.panels;
	this.nav = htObj.nav;
	this.timer = htObj.timer ? htObj.timer : 1000;
	this.nTouchDirX = 0;
	this.nCurIndex = 0;
	this.nTotalIndex = htObj.panels.length;
};


flickingFunc.prototype = {
	attachEvt : function() {
		var that = this;
		var touch = {
				startX : 0,
				startY : 0,
				endX : 0,
				endY : 0
		}
		document.addEventListener("touchstart", function(e) {
			touch.startX = e.touches[0].clientX;
			touch.startY = e.touches[0].clientY;
		}, false);

		document.addEventListener("touchend", function(e) {
			touch.endX = e.changedTouches[0].clientX;
			touch.endY = e.changedTouches[0].clientY;
			var calTouchDir = that.calTouchDir.bind(that); 
			that.calTouchDir(touch);
			that.sidebarOpen.call(that);
		}, false);
	},

	sidebarOpen : function() {
		var that = this;
		var target = that.nav;
		var targetst = window.getComputedStyle(target);
		var _width = window.innerWidth;
		var _height = window.innerHeight;
		var mql = window.matchMedia("(orientation: portrait)");
		if(mql.matches) {
			if(that.nTouchDirX == 1){
				target.style.left = "0px";
				//nav.style.webkitTransition = "-webkit-transform 2s ease-out";
				//nav.style.webkitTransform = "translate(0px, 0px)";
			} else if (that.nTouchDirX == -1){
				target.style.left = "-" + targetst.width;
				//var _width = "-" + targetst.width;
				//console.log(_width);
				//nav.style.webkitTransform = "translate(" + _width + ", 0px)";
			}
		} else {
			
		}
	},

	timeEvt : function() {
		var that = this;
		var move = function() {
			var cur = that.nCurIndex;
			var lastIdx = that.nTotalIndex - 1;
			if (cur == lastIdx) {
				for ( var i = 0; i <= lastIdx; i++) {
					var w = i * 100;
					var tr = "translate(" + w + "%)";
					that.panels[i].style.left = w + "%";
					// that.panels[i].webkitTransform = tr;
				}
				that.nCurIndex = 0;
			} else {
				that.movePanelLeft(cur);
			}
		};
		setInterval(move, that.timer);
	},

	calTouchDir : function(touch) {
		var mv = touch.startX - touch.endX;
		var that = this;
		var max = 10;
		if (mv < max * -1) {
			that.nTouchDirX = 1;
		} else if (mv > max * 1) {
			that.nTouchDirX = -1;
		} else {
			that.nTouchDirX = 0;
		}
	},

	movePanel : function() {
		/* move panel 을 사용할 때 call 또는 bind 해줘야 함) */
		var that = this;
		var idx = that.nCurIndex;
		var dir = that.nTouchDirX;
		if (dir == 1) {
			that.movePanelRight(idx);
		} else if (dir == -1) {
			that.movePanelLeft(idx);
		}

	},

	movePanelRight : function(curIdx) {
		var lastIdx = this.nTotalIndex - 1;
		if (curIdx != 0) {
			this.nCurIndex = curIdx - 1;
			var newCurIdx = this.nCurIndex;
			for ( var i = 0; i <= lastIdx; i++) {
				var w = (i - newCurIdx) * 100;
				// var tr = "translate(" + w + "%)"
				// this.panels[i].style.webkitTransform = tr;
				this.panels[i].style.left = w + "%";
			}
		}
	},

	movePanelLeft : function(curIdx) {
		var firstIdx = 0;
		var lastIdx = this.nTotalIndex - 1;
		if (curIdx != lastIdx) {
			this.nCurIndex = curIdx + 1;
			var newCurIdx = this.nCurIndex;
			var _width = window.innerWidth;
			for ( var i = 0; i <= lastIdx; i++) {
				var w = (i - newCurIdx) * 100;
				// var tr = "translate(" + w + "px, 0px)"
				// this.panels[i].style.webkitTransform = tr;
				this.panels[i].style.left = w + "%";
			}
		}
	}
};

var flick = {};
flick.DOM = {
	_id : function(id){
		return document.getElementById(id);
	},
	_class : function(className){
		return document.getElementsByClassName(className);
	},
	_tag : function(tagName){
		return document.getElementsByTagName(tagName);
	}
};

flick.SERVICE = {
	init : function(){
		var flickContainer = flick.DOM._id("flickContainer");
		var flickPanels = flick.DOM._class("flickPanel");
		var navigationbar = flick.DOM._tag('nav')[0];
		var evt = new flickingFunc({
			container : flickContainer,
			panels : flickPanels,
			nav : navigationbar,
			timer : 2000
		});
		evt.attachEvt();
		evt.timeEvt();
	}
};

window.addEventListener('load', function() {
	flick.SERVICE.init();
}, false);



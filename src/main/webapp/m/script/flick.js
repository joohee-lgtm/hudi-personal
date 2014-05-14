


var func = {
	toInt : function(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
	}
}


var sidebar = {
	ele : document.getElementsByTagName('nav')[0],
	moveEle : {
		showBase : 0,
		hideBase : 0,
		term : 0		
	}
}

sidebar.setHeight = function(){
	this.ele.style.height = window.innerHeight + "px";
}

sidebar.setMoveEle = function(){
	this.moveEle.showBase = 0;
	this.moveEle.hideBase = func.toInt(getComputedStyle(this.ele).width);
	this.moveEle.term = 20;
}

sidebar.move = function(obj){
	this.setMoveEle();
	if (obj.move.done){
		console.log(obj.move.done);
		if(obj.move.type.H === true){ // 수평이동일 경우
			if(obj.start.x - obj.end.x < 0){ // 우측 이동
				this.show();
			} else { // 좌측이동
				this.hide();
			}
		}
	}
}

sidebar.show = function(){
	var interval = null;
	var le;
	var obj = this;
	interval = setInterval(function(){
		if (func.toInt(getComputedStyle(obj.ele).left) >= obj.moveEle.showBase){
			obj.ele.style.left = obj.moveEle.showBase + "px";
			clearInterval(interval);
		} else {
			le = func.toInt(getComputedStyle(obj.ele).left) + obj.moveEle.term;
			obj.ele.style.left = le + "px";
		}
	},10);
}

sidebar.hide = function(){
	var interval = null;
	var le;
	var obj=this;
	interval = setInterval(function(){
		if (func.toInt(getComputedStyle(obj.ele).left) <= -obj.moveEle.hideBase){
			obj.ele.style.left = -obj.moveEle.hideBase + "px";
			clearInterval(interval);	
		} else {
			le = func.toInt(getComputedStyle(obj.ele).left) - obj.moveEle.term;
			obj.ele.style.left = le + "px";
		}
	}, 10);
}


function touch(){

	this.start = {
		x : 0, y : 0
	};

	this.end = {
		x : 0, y : 0
	};

	this.move = {
		distance : 0,
		done : false,
		type : {
			V : false,
			H : false,
			D : false
		}
	};
}

touch.prototype.slope = {
		hor : (window.innerHeight/2)/window.innerWidth, // 수평
		ver : window.innerHeight/(window.innerWidth/2), // 수직
		result : 0
	};


touch.prototype.getStart = function(){
	this.start.x = event.changedTouches[0].clientX;
	this.start.y = event.changedTouches[0].clientY;
}

touch.prototype.getMove = function(){
	this.move.distance += 1;
}

touch.prototype.getEnd = function(){
	this.end.x = event.changedTouches[0].clientX;
	this.end.y = event.changedTouches[0].clientY;
}

touch.prototype.getMoveInfo = function(){
	if (this.move.distance < 5){
		this.move.done = false;
	} else {
		this.move.done = true;
		this.slope.result = (this.end.y-this.start.y)/(this.end.x-this.end.y);
		var abs = Math.abs(this.slope.result);
		if (abs > this.slope.ver){
			this.move.type.V = true;
		} else if (abs < this.slope.hor){
			this.move.type.H = true;
		} else {
			this.move.type.D = true;
		}
	}
}

touch.prototype.afterTouchEvent = function(){
	this.getMoveInfo();
	sidebar.move(this);
}


var oTouch;

window.addEventListener("load", function(){
	sidebar.setHeight();
});

window.addEventListener("touchstart",function(event){
	oTouch = new touch();
	oTouch.getStart();
});

window.addEventListener("touchmove",function(event){
	oTouch.getMove();
});

window.addEventListener("touchend",function(event){
	oTouch.getEnd();
	oTouch.afterTouchEvent();
});





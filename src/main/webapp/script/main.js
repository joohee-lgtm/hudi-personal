
window.addEventListener('load',function(){
	Featured.posAll();
	ScrollEvent.disableVerticalScroll();
	console.log("aaa");
}, false);

window.addEventListener('resize',function(){
	Featured.posAll();
}, false);


// 초기화??
var Featured = {
	jarArray : document.getElementById('featured').getElementsByTagName('div')[0].children,
	row : 0,
	column : 0,
	remain : 0,

	jar : { 
		wid:400, 
		mar:40 
	}
};

/* setting about featured start */

Featured.Setting = function(){
	var inner = window.innerWidth;
	this.row = this.getRow(inner);
	this.column = this.getColumn();
	this.remain = this.getRemain();
}

Featured.getRow = function(inner){
	if (inner > 1200){ //1200 보다 큰 경우
		return 3;
	} else { // 1200 보다 작은 경우
		if ( inner > 800 ){ // 1200보다 작은 경우, 800보다 큰 경우
			return 2;
		} else { // 1200보다 작은 경우, 800보다 작은 경우 
			return 1;
		}
	}
}

Featured.getColumn = function(){
	return parseInt(this.jarArray.length/this.row);
}

Featured.getRemain = function(){
	return this.jarArray.length%this.row;
}

/* setting about featured end */







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
			}
		}
	}
	return objArray;
}

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
}

Featured.toInt = function(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
}

Featured.getBottom = function(obj){
	var style = getComputedStyle(obj);
	var bottom = this.toInt(style.top) + this.toInt(style.height) + this.jar.mar;
	return bottom;
}

/* used function in featured end */




/* set jar position function in featured start */

Featured.posJars = function(){
	this.posFirstGroup();
	this.posOtherGroup();
	this.featuredMargin();
	this.featuredHeight();
}

Featured.posFirstGroup = function(){
	for(var i=0 ; i<this.row ; i++){
		this.jarArray[i].style.left = this.jar.wid*i + "px";
		this.jarArray[i].style.top = "0px";
	}
}

Featured.posOtherGroup = function(){
	for (var i=1 ; i<=this.column ; i++){
		var BEFORE = (i-1)*this.row;
		var CURRENT = i*this.row;
		var R;

		if (i != this.column){ // 마지막 줄이 아닐 때
			this.groupArrange(BEFORE, CURRENT, this.row);
		} else { // 마지막줄일 때
			this.groupArrange(BEFORE, CURRENT, this.remain);
		}
	}
}

Featured.groupArrange = function(BEFORE, CURRENT, REMAIN){
	var baseObjArray = [];
	for (var c=0 ; c<this.row ; c++){
		baseObjArray[c] = this.jarArray[BEFORE+c];
	}
	baseObjArray = this.ascendingBottom(baseObjArray);
	for(var c=0; c<REMAIN ; c++){
		this.jarArray[CURRENT+c].style.left = getComputedStyle(baseObjArray[c]).left;
		this.jarArray[CURRENT+c].style.top = this.getBottom(baseObjArray[c]) + "px";
	}
}

Featured.featuredMargin = function(){
	this.jarArray[0].parentNode.style.width = this.jar.wid*this.row + "px";
};

Featured.featuredHeight = function(){
	var deArray = Array(this.row);
	for (var i=0; i<this.row ; i++){
		deArray[i] = this.jarArray[(this.jarArray.length-1)-i];
	}
	deArray = this.descendingBottom(deArray);
	this.jarArray[0].parentNode.style.height = this.getBottom(deArray[0]) + "px";
}

Featured.posAll = function(){
	this.Setting();
	this.posJars();
}

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
}












/*모바일 메인 페이지*/

var func = {
	toInt : function(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
	}
};

var layer = {
	header : {
		ele : document.getElementsByTagName('header')[0],
		height : 0
	},
	
	view : {
		ele : document.getElementById('view'),
		height : 0
	},
	
	cont : {
		ele : document.getElementById('content'),
		height : 0,
		MAXtop : 0,
		MINtop : 0
	},

	footer : {
		ele : document.getElementsByTagName('footer')[0],
		height : 0
	}
};

layer.view.setHeight = function(){
 	// header, footer 영역을 제외한 나머지
 	var header = func.toInt(getComputedStyle(layer.header.ele).height);
 	var footer = func.toInt(getComputedStyle(layer.footer.ele).height);
 	this.height = (window.innerHeight - (header + footer));
 	this.ele.style.height = this.height + "px";
	this.ele.style.overflow = "hidden";
};

layer.cont.setInitPos = function(){
	this.ele.style.position = "relative";
	this.ele.style.top = "0px";
	this.ele.style.left = "0px";
};

layer.cont.setHeight = function(){
	this.height = func.toInt(getComputedStyle(this.ele).height);
};

layer.cont.maxmin = function(){
	this.MAXtop = 0;
	console.log(layer.view.height-this.height);
	if(layer.view.height-this.height < 0){
		this.MINtop = layer.view.height-this.height;
	} else {
		this.MINtop = 0;
	}
};

layer.view.setHeight();
layer.cont.setInitPos();
layer.cont.setHeight();
layer.cont.maxmin();



window.addEventListener('scroll',function(e){
	var top = func.toInt(getComputedStyle(layer.cont.ele).top);
	if (document.body.scrollTop > 0){
		if (top > layer.cont.MINtop){
			layer.cont.ele.style.top = top - 20 + "px";
		}
	} else {
		if (layer.cont.MAXtop > top){
			layer.cont.ele.style.top = top + 20 + "px";	
		}
	}
});









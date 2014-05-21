/* 세로 스크롤 막기 시작 
function wheel(e){
	if (e.wheelDeltaX != 0 ){
		e.preventDefault();
	}
}

function disable_scroll() {
	// window.addEventListener('onmousewheel', wheel, false);
	// window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = wheel;
	// document.onmousewheel = wheel
	document.onkeydown = keydown;
}

//down = 40, right = 39, left = 37, up = 38
function keydown(e) {
	if (e.keyCode === 37 || e.keyCode === 39) {
	    e.preventDefault();
	}
}

disable_scroll();
세로 스크롤 막기 끝 */





/*
var ArrangeFeatured = {
	jars : document.getElementById('featured').getElementsByTagName('div')[0].children,
	row : 3,
	a : this.jars
	// column : parseInt(this.jars.length/this.row)
}


// ArrangeFeatured.jars = document.getElementById('featured').getElementsByTagName('div')[0].children
// ArrangeFeatured.row = 3;
// ArrangeFeatured.colum = parseInt(ArrangeFeatured.jars.length/ArrangeFeatured.row);


console.log(ArrangeFeatured.a); // undefined
*/


/* 


  이하 코드는 객체로 구현한건 좋았어요. 
  그런데 
  var ArrangeFeatured = {
	//이 안에 그냥 다 넣는게 더 보기 좋지 않을까요? 계속 ArrangeFeatured라는 객체명이 있어서 읽기도 힘들고 코드량도 길어진거 같아요.
  }


*/

var ArrangeFeatured = {
	// jars : document.getElementById('featured').getElementsByTagName('div')[0].children,
	// row : 3,
	// len : function(){
	// 	console.log(this.jars.length);
	// }
};


ArrangeFeatured.jars = document.getElementById('featured').getElementsByTagName('div')[0].children;
ArrangeFeatured.row = 3;
ArrangeFeatured.column = parseInt(ArrangeFeatured.jars.length/ArrangeFeatured.row);
ArrangeFeatured.remain = ArrangeFeatured.jars.length%3; //3은 뭐죠?

//jar라는 이름, wid,mar 이라는 key값.. 모두 다 이름이 너무 함축적이에요. 변수명은 길어도 됩니다. 명확히 표현하세요.
ArrangeFeatured.jar = {
	wid : 400,
	mar : 40
};

//요 함수 안에 코드들 중 일부분을 발라서 외부로 별도 함수로 분리하는 건 어떠요.
ArrangeFeatured.ascendingBottom = function(objArray){
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
};

//위에것이랑 성격이 비슷한데 중간에 manager하나 만들어서 받고 인자값에 의해서 분기처리해서 내부적으로 ascen과 descen으로 구분하게 하는 건 어때요?
ArrangeFeatured.descendingBottom = function(objArray){
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
};

ArrangeFeatured.toInt = function(text){
	var result = parseInt(text.substring(0,text.length-2)); //2는 뭐에요?
	return result;
};

ArrangeFeatured.getBottom = function(obj){
	var style = getComputedStyle(obj);
	var bottom = this.toInt(style.top) + this.toInt(style.height) + this.jar.mar;
	return bottom;
};

ArrangeFeatured.setFirstGroup = function(){
	for(var i=0 ; i<this.row ; i++){
		this.jars[i].style.left = this.jar.wid*i + "px";
		this.jars[i].style.top = "0px";
	}
};

//컨벤션 이야기 인데요. 코드문자의 간격을 좀 띄어쓰면 더 가독성이 좋아질 듯.(아래 예.)
ArrangeFeatured.setRemainGroup = function(){
	//for (var i=1 ; i<this.column ; i++){
	for (var i=1 ; i < this.column; i++){
		//var BEFORE = (i-1)*this.row;
		var BEFORE = (i-1) * this.row; //즉 연산자 사이는 띄어쓰기가 더 좋을 듯.
		//var CURRENT = i * this.row;
		var CURRENT = i*this.row;
		var baseObjArray = Array(this.row);  //array를 이렇게 생성자를 불러서 쓰지 않음.. 왜냐면 그냥 [] 이렇게 하는 게 똑같고 간결하게 구현할 수 있기 때문. 

		// 기준이 되는 이전 jar 그룹 만들기
		for (var c=0 ; c<this.row ; c++){
			baseObjArray[c] = this.jars[BEFORE+c];
		}

		// 기준이 되는 이전 jar 그룹을 bottom px 오름차순대로 나열하기
		baseObjArray = this.ascendingBottom(baseObjArray);

		// jar들 옮기기
		for (var c=0; c<this.row ; c++){
			this.jars[CURRENT+c].style.left = getComputedStyle(baseObjArray[c]).left;
			this.jars[CURRENT+c].style.top = this.getBottom(baseObjArray[c]) + "px";
		}
	}
};

ArrangeFeatured.setLastGroup = function(){
	if (this.remain != 0){
		for (var i=0 ; i<this.remain ; i++){
			var curObj = this.jars[this.column*this.row+i];
			var baseObj = this.jars[(this.column-1)*this.row+i];//여기도 좀 문자띄어쓰기.
			//비슷하게 동작되는 기능이니까 분리해서 함수로 처리할 수 있을 듯.
			curObj.style.left = getComputedStyle(baseObj).left;
			curObj.style.top = this.getBottom(baseObj) + "px";
		}
	}
};



ArrangeFeatured.setFirstGroup();
ArrangeFeatured.setRemainGroup();
ArrangeFeatured.setLastGroup();



//의미적으로 잘 그룹핑 했음. 
var SetWindow = {
	ScrollEvent : {

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
	},

	Footer : {
		jamStyles : Array(ArrangeFeatured.jars.length), //[]로 변경.

		featured : document.getElementById("featured"),
		
		getLastJarBottom : function(){
			for ( var i=0 ; i<ArrangeFeatured.jars.length ; i++) { //배열의 길이는 미리 담아두기.
				this.jamStyles[i] = ArrangeFeatured.jars[i];
			}
			this.jamStyles = ArrangeFeatured.descendingBottom(this.jamStyles);
		},

		setFeaturedHeight : function(){
			this.getLastJarBottom();
			this.featured.children[1].style.height = ArrangeFeatured.getBottom(this.jamStyles[0]) + "px";
		}
	}
};

SetWindow.ScrollEvent.disableVerticalScroll();
SetWindow.Footer.setFeaturedHeight();



// var jamStyles = Array(ArrangeFeatured.jars.length);

// for ( i=0 ; i<ArrangeFeatured.jars.length ; i++){
// 	jamStyles[i] = window.getComputedStyle(ArrangeFeatured.jars[i]);
// }

// jamStyles =ArrangeFeatured.descendingBottom(jamStyles);

// var featured = document.getElementById("featured");
// featured.children[1].style.height = getBottom(jamStyles[0]) + "px";











// // jar들 가져오기
// var jamjars = document.getElementById('featured').getElementsByTagName('div')[0].children;
// // jar group 이 몇개 있는지 세보기
// var q = parseInt(jamjars.length/3);
// // jar group 속한 것들 외에 나머지 알아보기
// var r = jamjars.length%3;

// /*
// +0		+1		+2
// 1[0],	2[1],	3[2]	-> i = 0
// 4[3],	5[4],	6[5]	-> i = 1
// 7[6],	8[7],	9[8]	-> i = 2
// 10[9],	11[10],	12[11]	-> i = 3
// 13[12],	14[13],	15[14]	-> i = 4
// 16[15],	17[16]			-> i = 5
// */

// // 1,2,3 jar 위치 지정하기
// jamjars[0].style.left = "0px";
// jamjars[1].style.left = "400px";
// jamjars[2].style.left = "800px";

// var ROW = 3;
// var TOTAL_MARGIN = 40;

// // 4~15 jar 위치 지정하기
// for ( var i=1 ; i<q ; i++ ){

// 	var BEFORE = (i-1)*ROW;
// 	var CURRENT = i*ROW;
// 	var baseObjStyleGroup = Array(ROW);

// 	// 기준이 되는 이전 jar 그룹 만들기
// 	for ( var c=0 ; c<ROW ; c++ ){
// 		baseObjStyleGroup[c] = window.getComputedStyle(jamjars[BEFORE+c]);
// 	}

// 	// 기준이 되는 이전 jar 그룹을 bottom px를 오름차순대로 sorting 하기
// 	baseObjStyleGroup = ascendingBottom(baseObjStyleGroup);

// 	// jar들 옮기기
// 	for ( var c=0 ; c<ROW ; c++){
// 		jamjars[CURRENT+c].style.left = baseObjStyleGroup[c].left;
// 		jamjars[CURRENT+c].style.top = setTopStyle(baseObjStyleGroup[c]);
// 	}
// }

// // 16, 17 jar 위치 지정하기
// if ( r != 0 ){
// 	for ( var i=0 ; i<r ; i++ ){
// 		var oCur = jamjars[(q*ROW)+i];
// 		var oBaseStyle = window.getComputedStyle(jamjars[q*ROW+i-ROW]);
// 		oCur.style.left = oBaseStyle.left;
// 		oCur.style.top = setTopStyle(oBaseStyle);
// 	}
// }


// // 00px를 숫자로 바꿔주기
// function toInt(text){
// 	var result = parseInt(text.substring(0,text.length-2));
// 	return result;
// }

// // top style 지정하기 (기준이 되는 jar의 스타일)
// function setTopStyle(baseJarStyle){
// 	var result = toInt(baseJarStyle.top) + toInt(baseJarStyle.height) + TOTAL_MARGIN;
// 	return result + "px";
// }

// // jar의 밑 부분 계산하기
// function getBottom(jarStyle){
// 	var top = toInt(jarStyle.top) + toInt(jarStyle.height) + TOTAL_MARGIN;
// 	return top;
// }

// // bottom 위치로 오름차순
// function ascendingBottom(jarStyleGroup){
	
// 	var len = jarStyleGroup.length;

// 	for ( var i=0 ; i<len ; i++){
// 		for (var j=i+1 ; j<len ; j++){
// 			var posInt = getBottom(jarStyleGroup[i]);
// 			var posIntNext = getBottom(jarStyleGroup[j]);
// 			if (posInt > posIntNext){
// 				var temp = jarStyleGroup[i];
// 				jarStyleGroup[i] = jarStyleGroup[j];
// 				jarStyleGroup[j] = temp;
// 			}
// 		}
// 	}

// 	return jarStyleGroup;
// }


// // bottom 위치로 내림차순
// function descendingBottom(jarStyleGroup){
	
// 	var len = jarStyleGroup.length;

// 	for ( var i=0 ; i<len ; i++){
// 		for (var j=i+1 ; j<len ; j++){
// 			var posInt = getBottom(jarStyleGroup[i]);
// 			var posIntNext = getBottom(jarStyleGroup[j]);
// 			if (posInt < posIntNext){
// 				var temp = jarStyleGroup[i];
// 				jarStyleGroup[i] = jarStyleGroup[j];
// 				jarStyleGroup[j] = temp;
// 			}
// 		}
// 	}

// 	return jarStyleGroup;
// }



// var jamStyles = Array(jamjars.length);

// for ( i=0 ; i<jamjars.length ; i++){
// 	jamStyles[i] = window.getComputedStyle(jamjars[i]);
// }

// jamStyles = descendingBottom(jamStyles);

// var featured = document.getElementById("featured");
// featured.children[1].style.height = getBottom(jamStyles[0]) + "px";









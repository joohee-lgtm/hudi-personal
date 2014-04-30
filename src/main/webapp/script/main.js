// jar들 가져오기
var jamjars = document.querySelectorAll('.jamjar');
// jar group 이 몇개 있는지 세보기
var q = parseInt(jamjars.length/3);;
// jar group 속한 것들 외에 나머지 알아보기
var r = jamjars.length%3;

/*
+0		+1		+2
1[0],	2[1],	3[2]	-> i = 0
4[3],	5[4],	6[5]	-> i = 1
7[6],	8[7],	9[8]	-> i = 2
10[9],	11[10],	12[11]	-> i = 3
13[12],	14[13],	15[14]	-> i = 4
16[15],	17[16]			-> i = 5
*/

// 1,2,3 jar 위치 지정하기
jamjars[0].style.left = "0px";
jamjars[1].style.left = "400px";
jamjars[2].style.left = "800px";

var ROW = 3;
var TOTAL_MARGIN = 40;

// 4~15 jar 위치 지정하기
for ( var i=1 ; i<q ; i++ ){

	var BEFORE = (i-1)*ROW;
	var CURRENT = i*ROW;
	var baseObjStyleGroup = Array(ROW);

	// 기준이 되는 이전 jar 그룹 만들기
	for ( var c=0 ; c<ROW ; c++ ){
		baseObjStyleGroup[c] = window.getComputedStyle(jamjars[BEFORE+c]);
	}

	// 기준이 되는 이전 jar 그룹을 bottom px를 오름차순대로 sorting 하기
	baseObjStyleGroup = ascendingBottom(baseObjStyleGroup);

	// jar들 옮기기
	for ( var c=0 ; c<ROW ; c++){
		jamjars[CURRENT+c].style.left = baseObjStyleGroup[c].left;
		jamjars[CURRENT+c].style.top = setTopStyle(baseObjStyleGroup[c]);
	}
}

// 16, 17 jar 위치 지정하기
if ( r != 0 ){
	for ( var i=0 ; i<r ; i++ ){
		var oCur = jamjars[(q*ROW)+i];
		var oBaseStyle = window.getComputedStyle(jamjars[q*ROW+i-ROW]);
		oCur.style.left = oBaseStyle.left;
		oCur.style.top = setTopStyle(oBaseStyle);
	}
}


// 00px를 숫자로 바꿔주기
function toInt(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
}

// top style 지정하기 (기준이 되는 jar의 스타일)
function setTopStyle(baseJarStyle){
	var result = toInt(baseJarStyle.top) + toInt(baseJarStyle.height) + TOTAL_MARGIN;
	return result + "px";
}

// jar의 밑 부분 계산하기
function getBottom(jarStyle){
	var top = toInt(jarStyle.top) + toInt(jarStyle.height) + TOTAL_MARGIN;
	return top;
}

// bottom 위치로 오름차순
function ascendingBottom(jarStyleGroup){
	
	var len = jarStyleGroup.length;

	for ( var i=0 ; i<len ; i++){
		for (var j=i+1 ; j<len ; j++){
			var posInt = getBottom(jarStyleGroup[i]);
			var posIntNext = getBottom(jarStyleGroup[j]);
			if (posInt > posIntNext){
				var temp = jarStyleGroup[i];
				jarStyleGroup[i] = jarStyleGroup[j];
				jarStyleGroup[j] = temp;
			}
		}
	}

	return jarStyleGroup;
}


// bottom 위치로 오름차순
function descendingBottom(jarStyleGroup){
	
	var len = jarStyleGroup.length;

	for ( var i=0 ; i<len ; i++){
		for (var j=i+1 ; j<len ; j++){
			var posInt = getBottom(jarStyleGroup[i]);
			var posIntNext = getBottom(jarStyleGroup[j]);
			if (posInt < posIntNext){
				var temp = jarStyleGroup[i];
				jarStyleGroup[i] = jarStyleGroup[j];
				jarStyleGroup[j] = temp;
			}
		}
	}

	return jarStyleGroup;
}



var jamStyles = Array(jamjars.length);

for ( i=0 ; i<jamjars.length ; i++){
	jamStyles[i] = window.getComputedStyle(jamjars[i]);
}

jamStyles = descendingBottom(jamStyles);

var featured = document.getElementById("featured");
featured.children[1].style.height = getBottom(jamStyles[0]) + "px";









// jar 3개 나열하기

var jamjars = document.querySelectorAll('.jamjar');

jamjars[0].style.left = "0px";
jamjars[1].style.left = "400px";
jamjars[2].style.left = "800px";

var q = parseInt(jamjars.length/3);;
var n = jamjars.length%3;
for ( var i=1 ; i<q ; i++ ){

	var o1style = window.getComputedStyle(jamjars[(i-1)*3+0]);
	var o2style = window.getComputedStyle(jamjars[(i-1)*3+1]);
	var o3style = window.getComputedStyle(jamjars[(i-1)*3+2]);

	var oStyleGroup = Array(o1style, o2style, o3style);
	oStyleGroup = compareUp(oStyleGroup);

	var fir = (3*i)+0;
	var sec = (3*i)+1;
	var thr = (3*i)+2;

	console.log(i+"번째 그룹");

	jamjars[fir].style.left = oStyleGroup[0].left;
	jamjars[sec].style.left = oStyleGroup[1].left;
	jamjars[thr].style.left = oStyleGroup[2].left;

	jamjars[fir].style.top = setTopStyle(oStyleGroup[0]);
	jamjars[sec].style.top = setTopStyle(oStyleGroup[1]);
	jamjars[thr].style.top = setTopStyle(oStyleGroup[2]);
}

if ( n != 0 ){
	for ( var i=0 ; i<n ; i++ ){
		var oCur = jamjars[(q*3)+i];
		var oBaseStyle = window.getComputedStyle(jamjars[q*3+i-3]);
		oCur.style.left = oBaseStyle.left;
		oCur.style.top = setTopStyle(oBaseStyle);
	}
}


// 오름차순
function compareUp(jarsStyleGroup){
	
	var len = jarsStyleGroup.length;

	for ( var i=0 ; i<len ; i++){
		var posInt = toInt(jarsStyleGroup[i].top) + toInt(jarsStyleGroup[i].height) + 40;
		for (var j=i+1 ; j<len ; j++){
			var posIntNext = toInt(jarsStyleGroup[j].top) + toInt(jarsStyleGroup[j].height) + 40;
			if (posInt > posIntNext){
				var temp = jarsStyleGroup[i];
				jarsStyleGroup[i] = jarsStyleGroup[j];
				jarsStyleGroup[j] = temp;
			}
		}
	}
	return jarsStyleGroup;
}

// 내림차순
function compareDown(jarsStyleGroup){
	
	var len = jarsStyleGroup.length;
	for ( var i=0 ; i<len ; i++){
		var posInt = toInt(jarsStyleGroup[i].top) + toInt(jarsStyleGroup[i].height) + 40;
		for (var j=i+1 ; j<len ; j++){
			var posIntNext = toInt(jarsStyleGroup[j].top) + toInt(jarsStyleGroup[j].height) + 40;
			if (posInt < posIntNext){
				var temp = jarsStyleGroup[i];
				jarsStyleGroup[i] = jarsStyleGroup[j];
				jarsStyleGroup[j] = temp;
			}
		}
	}
	return jarsStyleGroup;
}

function toInt(text){
	var result = parseInt(text.substring(0,text.length-2));
	return result;
}

function setTopStyle(baseStyle){
	var baseTop = toInt(baseStyle.top);
	var baseHeight = toInt(baseStyle.height);
	var result = baseTop + baseHeight + 40;
	return result + "px";
}


var jamStyles = Array(jamjars.length);
var reStyle = Array(jamjars.length); 
for ( i=0 ; i<jamjars.length ; i++){
	jamStyles[i] = window.getComputedStyle(jamjars[i]);
}

reStyle = compareDown(jamStyles);
var featured = document.getElementById("featured");
var featuredStyle = window.getComputedStyle("featured");
console.log(reStyle[0].top);
console.log(reStyle[0].height);
featured.style.height = toInt(reStyle[0].top) + toInt(reStyle[0].height) + 200 + "px";







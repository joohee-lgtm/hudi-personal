// jar 3개 나열하기

/*
전역변수가 너무 많아요. 자바스크립트에서 전역변수가 많다는 건 유지보수가 힘들다는 것.
전역변수를 줄일 수 있는 방법이 필요해요. 어떤 방법이 있을지 고민해보세요.

onload시점에서 동작되는 코드부터 정리해보세요. onload이벤트 잡고 그 시점에 동작되는 코드를 구현해보세요.
그러면서 아래 처음 노출되는 19~64라인까지를 어떤 함수에 넣어두는 것도 방법일 듯.
 */



/* 바로 아래 
   querySelecotAll의 반환값의 타입(type)이 무엇이죠? 그걸 확인해서 변수명의 접두어로 활용해보시죠 ? 
   이처럼 자바스크립트에서의 변수명은 타입명을 접두어로 사용하는 게 좋아요 . 자바스크립트는 명시적으로 타입을 알 수 없기 때문이에요 
   그러니 jamjars라는 변수명은 그런점에서 좋지 않아요
 */

var jamjars = document.querySelectorAll('.jamjar');

/*간단하지만 for문으로 충분히 바꿀 수 있을 듯 */
jamjars[0].style.left = "0px";
jamjars[1].style.left = "400px";
jamjars[2].style.left = "800px";

//아래는 세미콜론 2개임 . 변수명이 q 가 뭐지..?
var q = parseInt(jamjars.length/3);;
var n = jamjars.length%3;
for ( var i=1 ; i<q ; i++ ){

	//window.getComputedStyle과 같은 기~~~~~~~ 다란 이름은 짧은 이름의 함수 하나로 만들어서 재사용할 수 있게 해보세요.
	//역시 아래 코드도 for 문으로 대체 할 수 없을지 고민할 필요 있고요.
	var o1style = window.getComputedStyle(jamjars[(i-1)*3+0]);
	var o2style = window.getComputedStyle(jamjars[(i-1)*3+1]);
	var o3style = window.getComputedStyle(jamjars[(i-1)*3+2]);

	//Array 라고 하는 건 var oStyleGroup = [] 이렇게 리터럴 형태로 표현하는 거랑 완전 같아요. 일반적인 표기법임으로 []를 사용하세요.
	var oStyleGroup = Array(o1style, o2style, o3style);
	oStyleGroup = compareUp(oStyleGroup);

	var fir = (3*i)+0;
	var sec = (3*i)+1;
	var thr = (3*i)+2;

	console.log(i+"번째 그룹");

	//배열의 단순반복... for문 또는 forEach로 변경해보삼. (나중에 확인해보겠음요)
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
	
	//미리 길이을 구한 건 좋았음. 
	var len = jarsStyleGroup.length;

	for ( var i=0 ; i<len ; i++){
		//40은 뭐죠? 상수면 var DATA = 40 과 같이 대문자로 위쪽에 선언해두고 사용하세요.
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
	//jarsStyleGroup라는 변수명이 배열이면,,, a라는 접두어가 좋을지도. aJarsStyle 은 어떨까? (a가 배열을 의미함으로 group는 필요 없을테고)
	return jarsStyleGroup;
}

// 내림차순
// 함수의 네이밍을 조금더 자세하고 명확히 표현하기.(이름만 봐도 뭘 하는지 알 수 있게)
// compareUP과 compareDown은 비슷한 부분을 골라서 manager할 수 있는 함수를 만들고 다시 두개로 나눌 수 도 있겠어요.
// 예를들어 compare() 라는 함수 만들고, compare함수 내부에서는 어떤 식별자에 의해서 compareUp과 comparedOWN으로 나눠지는거죠.
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

// 짧은 이름을 가진 함수로 만들고 재사용해보세요 
var featured = document.getElementById("featured");
var featuredStyle = window.getComputedStyle("featured");
console.log(reStyle[0].top);
console.log(reStyle[0].height);
//200은 어디서 나온 값인지? 이런 의미를 알 수 없는 코드는 상수로 정의해두던가 계산에 의해서 구해두세요.
featured.style.height = toInt(reStyle[0].top) + toInt(reStyle[0].height) + 200 + "px";







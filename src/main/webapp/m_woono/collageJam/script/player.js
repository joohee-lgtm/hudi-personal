
//load되는 시점이후에 동작되도록 하는 습관을 가지삼.
// javascript 는 타입을 정적으로 선언하지 않기 때문에 이름앞에 타입을 적어두기도 해요(헝가리안 표기법).
// 따라서 아래 jamjar보다는 elJamjar 가 더 어울립니다.(el 은 element의 준말)
var jamjar = document.getElementById("flickView");
jamjar.addEventListener('touchstart', handleTouchStart, false);
jamjar.addEventListener('touchmove', handleTouchMove, false);
jamjar.addEventListener('touchend', handleTouchEnd, false);

//xDown과 yDown은 정수죠? javascript의 타입을 조금 공부하시고요. 
//정수를 초기화 할 때는 0이나 -1을 주로 사용하고. 아래처럼 null을 초기화 할 때는 객체타입인 경우 그렇게 합니다.
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
	xDown = evt.touches[0].clientX;
	yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
	//뭔가 아닌 상황을 빨리 return해주는 건 참 좋음.
	if (!xDown || !yDown) {
		return;
	}
	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;
	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp; /* most significant */
	if (Math.abs(xDiff) > Math.abs(yDiff)) { //if문 안은 간단할수록 보기 좋아요. Math.abs는 미리 계산하고 여기 들어오는 게 좋을 듯.
		if (xDiff > 0) {
			moveLeft();
		} else { /* right swipe */
			moveRight();
		}
	} else {
		if (yDiff > 0) { /* up swipe */
		} else { /* down swipe */
		}
	} /* reset values */
	xDown = null;
	yDown = null;
};

//evt 파라미터는 왜 필요해요? 
function handleTouchEnd(evt) {
	jamjar.style.left = "0px";
}

//시간이 되면 moveRight와 moveLeft가 비슷하면다 좀 다르잖아요. 이걸 하나로 합쳐서 중복코드를 없애는 건 어떨지.
function moveRight() {
	nAnimateTimer = null; //이것도 초가화 다시.
	fAnimate = function() {
		jamjar.style.left = parseInt(jamjar.style.left, 10) + 20 + "px";

		//320은 갑자기 어디서 나온것이지...
		if (parseInt(jamjar.style.left, 10) < 320) {
			nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
		}
		if ( parseInt(jamjar.style.left, 10) === 320 ) {
			jamjar.style.display = "none";
		}
	};
	nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
}

function moveLeft() {
	//jamjar.style.left = "0px";
	nAnimateTimer = null;
	fAnimate = function() {
		jamjar.style.left = parseInt(jamjar.style.left, 10) - 20 + "px";

		// terminate
		if (parseInt(jamjar.style.left, 10) > -320) {
			nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
			changeJamjar();
		}
	};
	nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
}

function changeJamjar() {
	return;
}
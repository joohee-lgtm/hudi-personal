var elFlick = document.getElementById("flickView"),
	elContainer = document.getElementById("flickContainer"),
	aChildNodes = elContainer.querySelectorAll("div.flick-jamjar"),
	nContainerWidth = elContainer.offsetWidth,
	nTouchStartX = 0,
	nTouchStartY = 0,
	// touchstart의 X Y좌표
	nTouchX = 0,
	nTouchY = 0,
	// touchmove, touchend의 X Y 좌표
	nIndex = 0,
	// 화면에 보이는 요소의 인덱스 값
	nTimeout = 0;
	
// touchstart 이벤트에 이벤트 핸들러 적용
var _attachTouchStart = function() {
		elFlick.addEventListener('touchstart', function(event) {
			_clearAnchor();
			var touch = event.touches[0];
			nTouchStartX = touch.pageX;
			nTouchStartY = touch.pageY;
		}, false);
	};
	
var _clearAnchor = function() {
		nTouchStartX = 0;
		nTouchStartY = 0;
	};
	
// touchmove 이벤트에 이벤트 핸들러 적용
var _attachTouchMove = function() {
		elFlick.addEventListener('touchmove', function(event) {
			var touch = event.touches[0];
			nTouchX = touch.pageX;
			nTouchY = touch.pageY;
			var nValue = nTouchX - nTouchStartX;
			if (nIndex <= 0 && nValue > 0 || nIndex >= 2 && nValue < 0) {
				return false;
			} else {
				elContainer.style.webkitTransform = "translate(" + nValue + "px)";
			}
		}, false);
		
		elFlick.addEventListener('touchmove', function(event) {
			event.preventDefault();
		}, false);
	};
	
// touchend 이벤트에 이벤트 핸들러 적용
var _attachTouchEnd = function() {
		elFlick.addEventListener('touchend', function(event) {
			var touch = event.changedTouches[0];
			nTouchX = touch.pageX;
			nTouchY = touch.pageY;
			var nTmpIndex = nIndex;
			var nTranslate = nContainerWidth;
			if (nTouchStartX - nTouchX > 0) {
				nIndex++;
				nTranslate = nContainerWidth * -1;
			} else {
				nIndex--;
			}
			if (nIndex >= 0 && nIndex <= 2) {
				// modified start
				nTimeout = setTimeout(function() {
					_setPosition();
					elContainer.style.webkitTransform = "translate(0)";
					elContainer.style.webkitTransition = null;
				});
				elContainer.style.webkitTransition = "all 0.5s ease-out";
				elContainer.style.webkitTransform = "translate(" + nTranslate + "px)";
			} else {
				nIndex = nTmpIndex;
			}
		}, false);
	};
	
// 인덱스 값을 확인하여 패널의 left 속성을 처리하는 함수
var _setPosition = function() {
		var nCenterIndex = nIndex % 3;
		var nRightIndex = nCenterIndex + 1;
		var nLeftIndex = nCenterIndex - 1;
		if (nCenterIndex - 1 < 0) {
			nLeftIndex = 2;
		}
		if (nCenterIndex + 1 > 2) {
			nRightIndex = 0;
		}
		aChildNodes[nLeftIndex].style.left = "-100%";
		aChildNodes[nCenterIndex].style.left = "0%";
		aChildNodes[nRightIndex].style.left = "100%";
	};
	
window.onload = function() {
	_attachTouchStart();
	_attachTouchMove();
	_attachTouchEnd();
};
var mFlicking = (function() {
	var mFlicking = {};
	var elFlick 	= _JE.getElById("flickView"),
		elContainer	= _JE.getElByClass("container")[0],
		aChildNodes	= _JE.getElByClass("about"),
		
		nContainerWidth	= elContainer.offsetWidth,
		nTouchStartX 	= 0, //on touchstart
		nTouchStartY 	= 0, //on touchstart
		nTouchX 		= 0, //on touchmove & touchend
		nTouchY 		= 0, //on touchmove & touchend
		nIndex 			= 0, //화면에 보이는 카드의 인덱스 값
		nTimeout 		= 0; //setTimeout()의 타임 저장 변수
	
	var _attachTouchStart = function() {
		elFlick.addEventListener('touchstart', function(e) {
			var touch 		= e.touches[0];
			nTouchStartX 	= touch.pageX;
			nTouchStartY 	= touch.pageY;
		}, false);
	};
	
	var _attachTouchMove = function() {
		elFlick.addEventListener('touchmove', function(e) {
			var touch 	= e.touches[0];
			nTouchX		= touch.pageX;
			nTouchY		= touch.pageY;
			
			var nValue 	= nTouchX - nTouchStartX;
			if(nIndex <= 0 && nValue > 0 || nIndex >= 3 && nValue < 0) {
				return false;
			}
			else {
				elContainer.style.webkitTransform = "translate(" + nValue + "px)";
			}
		}, false);
	};
	
	var _attachTouchEnd = function() {
		elFlick.addEventListener('touchend', function(e) {
			var touch 		= e.changedTouches[0];
			nTouchX 		= touch.pageX;
			nTouchY			= touch.pageY;
			var nTmpIndex 	= nIndex;
			var nTranslate 	= nContainerWidth;
			
			if(nTouchStartX - nTouchX > 0) {
				nIndex++;
				nTranslate = nContainerWidth * -1;
			}
			else {
				nIndex--;
			}
			
			if(nIndex >= 0 && nIndex <= 3) {
				nTimeout = setTimeout(function() {
					_setPosition();
					elContainer.style.webkitTransform 	= "translate(0)";
					elContainer.style.webkitTransition 	= null;
				}, 200);
				console.log("nTimeout: " + nTimeout);
				elContainer.style.webkitTransition 	= "all 0.2s ease-out";
				elContainer.style.webkitTransform	= "translate(" + nTranslate + "px)";
			}
			else {
				nIndex = nTmpIndex;
			}
		}, false);
	};
	
	var _setPosition = function() { 
		var nCenterIndex	= nIndex % 4,
			nRightIndex		= nCenterIndex + 1,
			nLeftIndex		= nCenterIndex - 1;
		
		if(nCenterIndex - 1 < 0) {
			nLeftIndex = 3;
		}
		if(nCenterIndex + 1 > 3) {
			nRightIndex = 0;
		}
		
		//not handling 4th card
		aChildNodes[nLeftIndex].style.left 		= "-100%";
		aChildNodes[nCenterIndex].style.left 	= "0%";
		aChildNodes[nRightIndex].style.left 	= "100%";
		
	};
	
	mFlicking.test = function() {
		console.log(nContainerWidth);
	};
	
	mFlicking.init = function() {
		_attachTouchStart();
		_attachTouchMove();
		_attachTouchEnd();
	}
	return mFlicking;
}());

window.addEventListener('load', function() {
	mFlicking.init();
}, false);
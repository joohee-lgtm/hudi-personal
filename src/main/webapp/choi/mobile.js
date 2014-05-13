oTouch = {};
oTouch.nIndex = 0;

var STATIC_DATA = {
	WEINRE_TEST_SERVER : "10.73.38.59",
	WEINRE_PORT : "9999",
	IMG_SIZE_SECTION02 : 192
}

function toggleContents(e) {
	var tar = e.target;
	var wrapper = tar.parentNode.parentNode.children[1];
	var display = getSpecificProperty(wrapper, "display");
	wrapper.style.display = (display === 'none') ? 'block' : 'none';
}

function getViewport() {
	var viewPortWidth;
	if (typeof window.innerWidth != 'undefined')
		viewPortWidth = window.innerWidth;
	return viewPortWidth;
}

function handleTouchstart(e) {
	oTouch.touchstartX = e.touches[0].clientX;
	oTouch.touchstartY = e.touches[0].clientY;
}

function handleTouchmove(e) {
	var touch = e.touches[0];
	oTouch.touchX = touch.clientX;
	oTouch.touchY = touch.clientY;
	oTouch.nValue = oTouch.touchX - oTouch.touchstartX;
	var index = oTouch.nIndex, value = oTouch.nValue;
	if(index <= 0 && value > 0 || index >= 3 && value < 0) 
		return false;
	else
		rifflePage();
}

function rifflePage() {
	oTouch.eleContainer.style.webkitTransform = "translate(" + oTouch.nValue + "px)";
}

function handleTouchend(e) {
	var touch = e.changedTouches[0];
	oTouch.touchX = touch.clientX;
	oTouch.touchY = touch.clientY;
	var nTmpIndex = oTouch.nIndex;
	
	// 오른쪽으로
	if(oTouch.touchstartX - oTouch.touchX > 0) {
		oTouch.nIndex ++;
	}
	// 왼쪽으로
	else {
		oTouch.nIndex --;
	}

	if(oTouch.nIndex >= 0 && oTouch.nIndex <= 3) {
		setPosition();
		oTouch.eleContainer.style.webkitTransform = "translate(0)";
	}
	else
		oTouch.nIndex = nTmpIndex;
}

function setPosition() {
	var nCenterIndex = oTouch.nIndex % 4;
	var nRightIndex = nCenterIndex + 1;
	var nLeftIndex = nCenterIndex - 1;
	//var nLastIndex = nRightIndex + 1;
	console.log(oTouch.nIndex);

	if(nLeftIndex < 0) {
		nLeftIndex = 3;
	}
	if (nRightIndex > 3) {
		nRightIndex = 0;
	}

	oTouch.aChildNodes[nLeftIndex].style.left = "-100%";
	oTouch.aChildNodes[nCenterIndex].style.left = "0%";
	oTouch.aChildNodes[nRightIndex].style.left = "100%";
	//oTouch.aChildNodes[nLastIndex].style.left = "200%";
}

function getSpecificProperty(param, property) {
	if(typeof param === "string") 
		var ele = document.querySelector(param);

	else if(typeof param === "object")
		var ele = param;
	var value = window.getComputedStyle(ele).getPropertyValue(property);
	return value;
}

function getElementBySelector(selector) {
	return document.querySelector(selector);
}

function flickControl() {

}

function getDirection() {
	var direction = (oTouch.touchendX - oTouch.touchstartX) > 0 ? 'left' : 'right';
	return direction;
}

function alignJarFrames() {
	var viewPortWidth = getViewport();
	var aFrames = document.getElementsByClassName('jamjar');
	var frameWidth = aFrames[0].offsetWidth;
	var margin = (viewPortWidth - frameWidth)/2;

	for(var i = 0; i < aFrames.length; i ++) {
		aFrames[i].style.marginLeft = margin + 'px';
		aFrames[i].style.marginRight = margin + 'px';
	}

	var eleWrapper = document.getElementById('jar-wrapper');
}

function adjustFrameWidth() {
	var viewPortWidth = getViewport();
	var aFrames = document.getElementsByClassName('about');
	var numOfPanels = aFrames.length;
	var eleContainer = document.querySelector(".container");
	
	for(var i = 0; i < aFrames.length; i ++) {
		aFrames[i].style.width = viewPortWidth + 'px';
	}
	eleContainer.style.width = (viewPortWidth * numOfPanels) + 'px';
}

function adjustImgWidth() {
	var orientation = window.orientation;

	if (orientation !== 0) {
		console.log(orientation);
		var viewPortWidth = getViewport();
		var imgWidth = 192; //same as on portrait view
		var proportion = (imgWidth * 100) / viewPortWidth;
		var leftValue = (100 - proportion) / 2;
		var eleImg = document.getElementsByClassName('aboutImg');

		for(var i = 0; i < eleImg.length; i ++) {
			eleImg[i].style.width = imgWidth + 'px';
			eleImg[i].style.left = leftValue + 'px';
		}
	}
}

function addScriptForWeinre() {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = "http://" + STATIC_DATA.WEINRE_TEST_SERVER + ":" + STATIC_DATA.WEINRE_PORT + "/target/target-script-min.js#anonymous";
	head.appendChild(script);
}

function registerEvent() {
	var aToggler = document.getElementsByClassName('toggler');

	for(var i = 0; i < aToggler.length; i ++) {
		aToggler[i].addEventListener('touchstart', toggleContents, false);
	}

	var flickView = document.getElementById('flickView');
	flickView.addEventListener('touchstart', handleTouchstart, false);
	flickView.addEventListener('touchmove', handleTouchmove, false);
	flickView.addEventListener('touchend', handleTouchend, false);
}

function showSameIntroductionCard() {
	var display = getSpecificProperty("#flickView", "display");
	if(display !== 'none') {

	}
}

window.addEventListener('load', function() {
	oTouch.eleContainer = getElementBySelector(".container");
	oTouch.aChildNodes = document.getElementsByClassName('about');
	registerEvent();
	alignJarFrames();
	//adjustFrameWidth();
	addScriptForWeinre();
}, false);

window.addEventListener('orientationchange', function() {
	alignJarFrames();
	adjustFrameWidth();
	adjustImgWidth();
	showSameIntroductionCard();
}, false);
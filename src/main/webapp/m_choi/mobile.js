oTouch = {};
oTouch.nIndex = 0;

JE = {
	getSpecificProperty : function(ele, property) {
		return window.getComputedStyle(ele).getPropertyValue(property);
	},
	getElBySel : function(selector) {
		return document.querySelector(selector);
	},
	getElBySelWithParent : function(selector, parent) {
		var parent = document.querySelector(parent);
		return parent.querySelectorAll(selector);
	},
	getElByClass : function(name) {
		return document.getElementsByClassName(name);
	}
}
	

var STATIC_DATA = {
		WEINRE_TEST_SERVER 	: "10.73.38.59",
		WEINRE_PORT 		: "9999",
		SECTION02_IMG_SIZE 	: 192,
		FIRST_CARD_INDEX 	: 0,
		LEFT 				: "left",
		RIGHT 				: "right",
		LEFT_CARD_POSITION 	: "-100%",
		RIGHT_CARD_POSITION : "100%",
		CENTER_CARD_POSITION: "0%",
		ONE_HUNDRED_PERCENT : 100
}

function toggleContents(e) {
	var tar = e.target;
	var wrapper = tar.parentNode.parentNode.children[1];
	var display = JE.getSpecificProperty(wrapper, "display");
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
	oTouch.sDirection = getDirection(oTouch.nValue);
	if(isInvalidFlicking()) 
		return false;
	else
		flickPage();
}

function isInvalidFlicking() {
	if(oTouch.nIndex <= STATIC_DATA.FIRST_CARD_INDEX && oTouch.sDirection === STATIC_DATA.LEFT || oTouch.nIndex >= STATIC_DATA.LAST_CARD_INDEX && oTouch.sDirection === STATIC_DATA.RIGHT)
		return true;
	return false;
}

function getDirection(value) {
	if(value > 0)
		return STATIC_DATA.LEFT;
	else 
		return STATIC_DATA.RIGHT;
}

function flickPage() {
	oTouch.eleContainer.style.webkitTransform = "translate(" + oTouch.nValue + "px)";
}

function handleTouchend(e) {
	var touch = e.changedTouches[0];
	oTouch.touchX = touch.clientX;
	oTouch.touchY = touch.clientY;
	var nTmpIndex = oTouch.nIndex;
	
	if(oTouch.touchstartX - oTouch.touchX > 0) {
		oTouch.nIndex++;
	}
	else {
		oTouch.nIndex--;
	}

	if(oTouch.nIndex >= STATIC_DATA.FIRST_CARD_INDEX && oTouch.nIndex <= STATIC_DATA.LAST_CARD_INDEX) {
		setPosition();
		oTouch.eleContainer.style.webkitTransform = "translate(0)";
	}
	else
		oTouch.nIndex = nTmpIndex;
}

function setPosition() {
	var nCenterIndex = oTouch.nIndex % STATIC_DATA.NUM_CARDS;
	var nRightIndex = nCenterIndex + 1;
	var nLeftIndex = nCenterIndex - 1;
	//console.log(oTouch.nIndex);

	if(nLeftIndex < STATIC_DATA.FIRST_CARD_INDEX) {
		nLeftIndex = STATIC_DATA.LAST_CARD_INDEX;
	}
	if (nRightIndex > STATIC_DATA.LAST_CARD_INDEX) {
		nRightIndex = STATIC_DATA.FIRST_CARD_INDEX;
	}

	oTouch.aChildNodes[nLeftIndex].style.left = STATIC_DATA.LEFT_CARD_POSITION;
	oTouch.aChildNodes[nCenterIndex].style.left = STATIC_DATA.CENTER_CARD_POSITION;
	oTouch.aChildNodes[nRightIndex].style.left = STATIC_DATA.RIGHT_CARD_POSITION;
}

function getDirection() {
	return direction = (oTouch.touchendX - oTouch.touchstartX) > 0 ? STATIC_DATA.LEFT : STATIC_DATA.RIGHT;
}

function alignJarFrames() {
	var viewPortWidth = getViewport();
	var aFrames = JE.getElByClass('jamjar');
	var frameWidth = aFrames[0].offsetWidth;
	var margin = (viewPortWidth - frameWidth) / 2;

	for(var i = 0; i < aFrames.length; i ++) {
		aFrames[i].style.marginLeft = margin + 'px';
		aFrames[i].style.marginRight = margin + 'px';
	}

	var eleWrapper = getElById('jar-wrapper');
}

function getElById(name) {
	return document.getElementById(name);
}

function adjustFrameWidth() {
	var viewPortWidth = getViewport();
	var aFrames = JE.getElByClass('about');
	var eleContainer = JE.getElBySel(".container");
	
	for(var i = 0; i < aFrames.length; i ++) {
		aFrames[i].style.width = viewPortWidth + 'px';
	}
	eleContainer.style.width = (viewPortWidth * numOfPanels) + 'px';
}

function adjustImgWidthOnOrientationChange() {
	var orientation = window.orientation;

	if (orientation !== 0) {
		var viewPortWidth = getViewport();
		var proportion = (imgWidth * STATIC_DATA.ONE_HUNDRED_PERCENT) / viewPortWidth;
		var leftValue = (STATIC_DATA.ONE_HUNDRED_PERCENT - proportion) / 2;
		var eleImg = JE.getElByClass('aboutImg');

		for(var i = 0; i < eleImg.length; i ++) {
			eleImg[i].style.width = STATIC_DATA.SECTION02_IMG_SIZE + 'px';
			eleImg[i].style.left = leftValue + 'px';
		}
	}
}

function addScriptForWeinre() {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = getScriptSrc();
	head.appendChild(script);
}

function getScriptSrc() {
	return "http://" + STATIC_DATA.WEINRE_TEST_SERVER + ":" + STATIC_DATA.WEINRE_PORT + "/target/target-script-min.js#anonymous";
}

function registerEvent() {
	var aToggler = JE.getElByClass('toggler');

	for(var i = 0; i < aToggler.length; i ++) {
		aToggler[i].addEventListener('touchstart', toggleContents, false);
	}

	var flickView = getElById('flickView');
	flickView.addEventListener('touchstart', handleTouchstart, false);
	flickView.addEventListener('touchmove', handleTouchmove, false);
	flickView.addEventListener('touchend', handleTouchend, false);
}

// function showSameIntroductionCard() {
// 	var ele = getElById('flickView');
// 	var display = getSpecificProperty(ele, "display");
// 	if(display !== 'none') {

// 	}
// }

function initVariables() {
	STATIC_DATA.NUM_CARDS = JE.getElBySelWithParent(".about", ".container").length;
	STATIC_DATA.LAST_CARD_INDEX = STATIC_DATA.NUM_CARDS - 1;
	// STATIC_DATA.LEFT_CARD_INDEX = STATIC_DATA.NUM_CARDS - 1;
	// STATIC_DATA.RIGHT_CARD_INDEX = STATIC_DATA.NUM_CARDS + 1;
}

window.addEventListener('load', function() {
	oTouch.eleContainer = JE.getElBySel(".container");
	oTouch.aChildNodes = JE.getElByClass('about');
	registerEvent();
	alignJarFrames();
	initVariables();
	//adjustFrameWidth();
	//addScriptForWeinre();
}, false);

window.addEventListener('orientationchange', function() {
	alignJarFrames();
	adjustFrameWidth();
	adjustImgWidthOnOrientationChange();
	showSameIntroductionCard();
}, false);
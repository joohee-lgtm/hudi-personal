var JE_Mobile = (function() {
	var JE_Mobile = {};
	
	var imgDiameter 	= 0,
		viewportWidth	= 0;
	var vFrame 			= {};
	var IMG_RATIO_TO_VP = 0.8;
	
	//private functions
	function calCircleImgSize() {
		imgDiameter 	= parseInt(_JE.getElementSize('about').height) * IMG_RATIO_TO_VP;
	}
	
	function setViewportWidth(classname) {
		return viewportWidth = _JE.getViewport();
	}
	
	function setImgSize(classname) {
		calCircleImgSize();
		var aImg = _JE.getElByClass(classname);
		for(var i = 0; i < aImg.length; i ++) {
			_JE.setCSSStyle(aImg[i], {
				width	: imgDiameter + 'px',
				height	: imgDiameter + 'px'
			});
		}
	}
	
	function putImgCenter(classname) {
		var marginL		= -1 * (imgDiameter / 2) + 'px';
		var marginT		= marginL;
		var aImg = _JE.getElByClass(classname);
		
		for(var i = 0; i < aImg.length; i ++) {
			_JE.setCSSStyle(aImg[i], {
				left			: '50%',
				top				: '50%',
				'margin-left'	: marginL,
				'margin-top'	: marginT
			});
		}
	}
	
	function doImgSetting(classname) {
		setImgSize(classname);
		putImgCenter(classname);
	}
	
	function getPossibleNumOfFrameInARow() {
		return parseInt(viewportWidth / vFrame.frameWidthIncldMargin);
	}

	function alignVideoFrames(classname) {
		setViewportWidth();
		calFrameWidth(classname);
		setFramesCentered(classname);
	}
	
	function calFrameWidth(classname) {
		var frame 		= _JE.getElByClass(classname)[0],
			frameWidth	= frame.offsetWidth,
			frameML		= parseInt(_JE.getSpecificProperty(frame, "margin-left")),
			frameMR		= parseInt(_JE.getSpecificProperty(frame, "margin-right"));
		
		vFrame.frameWidthIncldMargin = frameWidth + frameML + frameMR;
	}
	
	function setFramesCentered(classname) {
		var numFrames = getPossibleNumOfFrameInARow();
		var frameWidth = vFrame.frameWidthIncldMargin;
		var eleWrapper = _JE.getElByClass(classname)[0].parentNode;
		var wrapperPaddingLeft = (viewportWidth - numFrames * frameWidth) / 2 + 'px';
		_JE.setCSSStyle(eleWrapper, {
			'padding-left' : wrapperPaddingLeft
		});
	}
	
	//public functions
	JE_Mobile.init = function() {
		doImgSetting('aboutImg');
		alignVideoFrames('jamjar');
	};
	
	JE_Mobile.orientChangeInit = function() {
		alignVideoFrames('jamjar');
	};
	
	return JE_Mobile;
}());

window.addEventListener('load', function() {
	JE_Mobile.init();
}, false);

window.addEventListener('orientationchange', function() {
	JE_Mobile.orientChangeInit();
}, false);
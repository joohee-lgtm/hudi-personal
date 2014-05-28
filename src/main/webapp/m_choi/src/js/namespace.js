var _JE_Mobile = (function() {
	var _JE_Mobile = {};
	
	var imgDiameter 	= 0;
	var IMG_RATIO_TO_VP = 0.8; 
	
	function calCircleImgSize() {
		imgDiameter 	= parseInt(_JE.getElementSize('about').height) * IMG_RATIO_TO_VP;
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
	
	function putImgCenter(classname, wrap) {
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
	
	_JE_Mobile.init = function() {
		//나중에 아래 두 함수 실행함수 만들기
		setImgSize('aboutImg');
		putImgCenter('aboutImg', 'about');
	}
	
	return _JE_Mobile;
}());

window.addEventListener('load', function() {
	_JE_Mobile.init();
}, false);
window.mScroll = (function() {
	//private member
	var _option = {
			width : 0,
			nHeight : 0
	}
	var _element = {}
	var _setLayer = function(ele) {
		_element["view"] 	= _JE.getElById(ele);
		_element["content"] = _element["view"].firstChild;
		_setProperty();
	};
	
	var _sPrefix = m.getPrefix(), _setProperty = function () {
		_JE.setCSSStyle(_element["view"], {
			"position" : "relative",
			"overflow" : "hidden"
		});
		_JE.setCSSStyle(_element["content"], {
			"position"	: "absolute",
			"zIndex"	: 1,
			"left"		: 0,
			"top"		: 0
		});
	}
	
	//constructor
	function mScroll(ele, option) {
		//옵션 초기화
		//option이 없으면 생성
		option = option || {};
		for(var property in option) {
			_option[property] = option[property];
		}
		//단위(px)가 없으면 붙이기
		_option["width"] = isNaN(_option["width"]) ? _option["width"] :_option["width"] + "px";
		_option["height"] = isNaN(_option["height"]) ? _option["height"] :_option["height"] + "px";
		
		_setLayer(ele);
		_refresh();
	}
	
	mScroll.prototype = {};
	return mScroll;
})();
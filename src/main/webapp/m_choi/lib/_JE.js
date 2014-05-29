_JE = {
	getViewport : function() {
		if (typeof window.innerWidth != 'undefined')
			var viewPortWidth = window.innerWidth;
		return viewPortWidth;
	},
	
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
	},
	
	getElById : function(name) {
		return document.getElementById(name);
	},
	
	toggleContents : function(e) {
		var tar = e.target;
		var wrapper = tar.parentNode.parentNode.children[1];
		var display = _JE.getSpecificProperty(wrapper, "display");
		wrapper.style.display = (display === 'none') ? 'block' : 'none';
	},
	
	setCSSStyle : function(element, propertyObject) {
		for(var property in propertyObject) {
			element.style[property]= propertyObject[property];
		}
	},
	
	getElementSize : function(classname) {
		var obj 		= {};
		var eleWrapper 	= _JE.getElByClass(classname)[0];
		obj.height 		= parseInt(_JE.getSpecificProperty(eleWrapper, "height"));
		obj.width		= parseInt(_JE.getSpecificProperty(eleWrapper, "width"));
		
		return obj;
	},
	appendPX : function(value) {
		return value + 'px';
	}
}
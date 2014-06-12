var mFeatured = (function() {
	mFeatured = {};
	var data = jarobjs;
	var aDivThumbnail 	= _JE.getElByClass("thumbnail"),
		aDivDesc		= _JE.getElByClass("desc");
	
	function showData() {
		for(var i = 0; i < data.length; i ++) {
			var tmp 	= data[i];
			var url 	= tmp.tb_url,
				title 	= tmp.title,
				date 	= tmp.date_created;
			aDivThumbnail[i].src 	= url;
			aDivDesc[i].innerHTML	= title + "<br>" + date;
		}
	}
	
	function calHowManyDaysAgo(created) {
		
	}
	
	/*
		function addScriptForWeinre() {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.src = getScriptSrc();
			head.appendChild(script);
		}
		
	 * 	_JE.setCSSStyle(eleImg[i], {
			width 			: imgWidth + 'px',
			height 			: imgWidth + 'px',
			left 			: '50%',
			'margin-left' 	: -1 * (imgWidth / 2) + 'px',
			top 			: '10%'
		});
		
		
	 * */
	
	mFeatured.test = function() {
		console.log(aDivDesc);
		showData();
	};
	
	return mFeatured;
}());

mFeatured.test();
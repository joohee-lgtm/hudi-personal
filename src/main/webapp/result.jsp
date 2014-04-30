<!DOCTYPE html>
<html>
<head>
<title>result page</title>
<link rel="stylesheet" type="text/css" href="./style/common.css"/>
<link rel="stylesheet" type="text/css" href="./style/result.css"/>

</head>
<body>
<div id="wrap">
	<section>
		<div id="slide">
			<div>
				<img src="./images/nophoto.jpg"></div>
<!-- 			<div>
				<img src="./images/nophoto.jpg"></div>
			<div>
				<img src="./images/nophoto.jpg"></div>
			<div>
				<img src="./images/nophoto.jpg"></div>
 -->		</div>
		<div id="player">
<!-- 			<embed src="http://www.youtube.com/v/1AmRq8zwpgc?hl=ko_KR&amp;version=3&amp;rel=0" type="application/x-shockwave-flash" width="350" height="250" allowscriptaccess="always" allowfullscreen="true"></embed>
 -->		</div>
		<div id="setting">
			<div>
				<input type="range" min="0" max="500" value="5" step="5" onchange="rangevalue.value=value" />
				<output id="rangevalue"></output>
				<span>x00.1sˆ</span> 
				<button type="button">play</button>
				<button type="button">stop</button>
			</div>
			<form>
				<input type="text" value="title">
				<textarea rows="5" cols="30">comment</textarea>
				<input type="submit" value="submit"/>
			</form>
		</div>
	</section>
	<section id="temparea">
	</section>
</div>
	<script type="text/javascript" src="./script/result.js"/></script>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>result page</title>
<link rel="stylesheet" type="text/css" href="./style/common.css"/>
<link rel="stylesheet" type="text/css" href="./style/result.css"/>

</head>
<body>
<div id="wrap">
	<!--결과가 나타날 부분-->
	<section>
		<div id="setting">
			<form>
				<input type="text" value="title">
				<textarea rows="5" cols="30">tag</textarea>
				<input type="submit"/>
			</form>
			<div>
				<input type="range" min="0" max="500" value="5" step="5" onchange="rangevalue.value=value" />
				<output id="rangevalue"></output>
				<span>x00.1초</span> 
				<button type="button">play</button>
				<button type="button">stop</button>
			</div>
		</div>
		<div id="slide">
			<div>
				<img src="./images/nophoto.jpg"></div>
			<div>
				<img src="./images/nophoto.jpg"></div>
			<div>
				<img src="./images/nophoto.jpg"></div>
			<div>
				<img src="./images/nophoto.jpg"></div>
		</div>
		<div id="audio">
			<!-- <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146843791&amp;auto_play=true&amp;hide_related=false&amp;start=100&amp;visual=true"></iframe>
			 -->
		</div>
	</section>
			<section id="temparea">
		</section>
</div>
	<script type="text/javascript" src="./script/result.js"/></script>

</body>
</html>
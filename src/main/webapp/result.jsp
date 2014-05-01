<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<title>result page</title>
<link rel="stylesheet" type="text/css" href="./style/common.css"/>
<link rel="stylesheet" type="text/css" href="./style/result.css"/>

</head>
<body>
<div id="wrap">
	<header id="header">
		<a href="./main.jsp"> CollageJam </a>
	</header>

	<section id="resultWrap">
		<div id="slide">
			<div><img src="./images/nophoto.jpg" style="width: 300px;"></div>
	 		<div><img src="./images/nophoto.jpg" style="width: 300px;"></div>
			<div><img src="./images/nophoto.jpg" style="width: 300px;"></div>
			<div><img src="./images/nophoto.jpg" style="width: 300px;"></div>
		</div>
		<div id="player">
		</div>

		<div id="setting">
			<div>
				<button type="button">play</button>
				<button type="button">stop</button>
				<div>
					<input type="range" min="0" max="500" value="5" step="5" onchange="rangevalue.value=value" />
					<output id="rangevalue"></output>
					<span>x00.1s</span>
				</div>
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
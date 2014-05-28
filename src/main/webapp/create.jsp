<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<title>result page</title>
<link rel="stylesheet" type="text/css" href="./src/css/common.css"/> 
<link rel="stylesheet" type="text/css" href="./src/css/create/fixed.css"/>
<link rel="stylesheet" type="text/css" href="./src/css/create/photo.css"/>
<link rel="stylesheet" type="text/css" href="./src/css/create/preview.css"/>

</head>
<body>

<div id="wrap">
	<header id="header">
		<span>
			<a href="./main.jsp">CollageJam</a>
		</span>
	</header>
˜
	<div id="navigation">
		<div>
			<span id="create">
				Choose Photo
				<!-- <a href="./create.jsp">Choose photos</a>  -->
			</span>
			<span id="resultButton"> 
				next
				<!-- <a href="./result.jsp">NEXT ></a> -->
			</span>
		</div>
	</div>
	<section id="photoSelectWrap">
		<div id="search">
			<form accept-charset="UTF-8" onsubmit="emulAcceptCharset(this)">
				<input type="text" name="search-photos" autocomplete="off"
					placeholder="Search for Images"> <span class="submit">
				</span>
			</form>
		</div>
		<div id="overview">Loading...</div>
<!-- 		<div id="arrangePhotos">
			<div id="sortStrip">
				<p id="details">
					<span id="photoCount"> 0 </span> photos / 90 (max) added
				</p>
				<div id="carousel"></div>
			</div>
		</div>
 -->	</section>

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
			<form id="ajaxform" action="create" method="post">
				<input type="text" placeholder="title">
				<textarea rows="5" cols="30" placeholder="description"></textarea>
				<input id="createbt" type="submit" value="submit"/>
			</form>
		</div>
	</section>
	
	<div id="arrangePhotos">
		<div id="sortStrip">
			<p id="details">
				<span id="photoCount"> 0 </span> photos / 90 (max) added
			</p>
			<div id="carousel"></div>
		</div>
	</div>
	<section id="temparea">
	</section>
</div>
	<script src="https://www.google.com/jsapi" type="text/javascript"></script>
	<script type="text/javascript" src="./src/js/create/fixed.js"/></script>
	<script type="text/javascript" src="./src/js/create/photo.js"/></script>
	<script type="text/javascript" src="./src/js/create/youtube.js"/></script>
	<script type="text/javascript" src="./src/js/create/preview.js"/></script>
	<script type="text/javascript" src="./src/js/create/sendData.js"/></script>
</body>
</html>

<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<link type="text/css" rel="stylesheet" href="./style/common.css" />
<link type="text/css" rel="stylesheet" href="./style/create/photo.css" />
<title>Create CollageJam</title>
</head>
<body>
	<header id="header">
		<a href="./main.jsp"> CollageJam </a>
	</header>

	<section id="photoSelectWrap">
		<!-- div id="mainNavigation">
			<span>
				<a href="./main.jsp">CollageJam</a>
			</span>
		</div> -->
		<div id="subNavigation">
			<div><span id="create">
				<a href="./create-photo.jsp">Choose photos</a> 
				</span>
				<span id="resultButton"> 
					<a href="./create-preview.jsp">NEXT ></a>
				</span>
			</div>
		</div>
		<div id="search">
			<!-- 자바스크립트로 -->
			<form accept-charset="UTF-8" onsubmit="emulAcceptCharset(this)">
				<input type="text" name="search-photos" autocomplete="off"
					placeholder="Search for Images"> <span class="submit">
				</span>
			</form>
		</div>
		<!-- id를 너무 많이 사용했어요. 스타일을 입힐 목적이라면 id대신 class를 사용하세요-->
		<div id="overview">Loading...</div>
		<div id="arrangePhotos">
			<div id="sortStrip">
				<p id="details">
					<span id="photoCount"> 0 </span> photos / 90 (max) added
				</p>
				<div id="carousel"></div>
			</div>
		</div>
	</section>
<script src="https://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript" src="./script/create/photo.js"/></script>
</body>
</html>
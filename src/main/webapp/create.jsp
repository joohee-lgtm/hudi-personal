<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<link type="text/css" rel="stylesheet" href="./style/common.css" />
<link type="text/css" rel="stylesheet" href="./style/create.css" />
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
				<a href="./create.jsp">Choose photos</a> 
				</span>
				<span id="resultButton"> 
					<a href="./result.jsp">NEXT ></a>
				</span>
			</div>
		</div>
		<div id="search">
			<form accept-charset="UTF-8" onsubmit="emulAcceptCharset(this)">
				<input type="text" name="search-photos" autocomplete="off"
					placeholder="Search for Images"> <span class="submit">
				</span>
			</form>
		</div>
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
<script type="text/javascript" src="./script/create.js"/></script>
</body>
</html>
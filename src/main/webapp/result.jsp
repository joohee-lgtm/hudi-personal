<%@ page language="java" contentType="text/html; charset=euc-kr"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<title>result</title>
<link rel="stylesheet" type="text/css" href="./src/css/common.css" />
<link rel="stylesheet" type="text/css" href="./src/css/result.css" />
</head>
<body>
	<header>
		<a href="/collageJam/main"> CollageJam </a>
	</header>

	<section id="resultWrap">
		<div>
			<article id="player"></article>
			<article id="slide"></article>
			<article id="info">
				<ul>
					<li>userid</li>
				</ul>
			</article>
		</div>
		<div>
			<button>PLAY</button>
			<button>STOP</button>
		</div>
	</section>
	<footer>footer</footer>
</body>
<script>
	var jamjar = ${jamjar};
	var userDataModel = {
		originalURL : jamjar.photolist
	}
	console.log(jamjar);
</script>
<script src="https://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript" src="./src/js/result/bgm.js" /></script>
<script type="text/javascript" src="./src/js/result/slide.js" /></script>
</html>

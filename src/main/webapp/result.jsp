<%@ page language="java" contentType="text/html; charset=euc-kr"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<title>result</title>
<link rel="stylesheet" type="text/css" href="./src/css/common.css"/>
<link rel="stylesheet" type="text/css" href="./src/css/result.css"/>
</head>
<body>
	<header>
			<a href="/collageJam/main"> CollageJam </a>
	</header>

	<section id="resultWrap">
		<div>
			<article id="player"></article>
			<article id="slide">
			</article>
			<article id="info">
				<ul>
					<li>userid</li>
<!-- 					<li>description</li>
					<li>datetime</li>
 -->				</ul>
			</article>
		</div>
		<div>
			<button>PLAY</button>
			<button>STOP</button>
		</div>
	</section>
	<footer>footer</footer>
</body>
	<script src="https://www.google.com/jsapi" type="text/javascript"></script>
	<script type="text/javascript" src="./src/js/result/youtube_bgm.js"/></script>
	<script>
/* 	 var userDataModel = {
			originalURL : ["https://sdl-shop.line.naver.jp/themeshop/v1/produc…008-baec-ed40960d37ce/5/WEBSTORE/icon_136x190.png", "http://1.bp.blogspot.com/-AlE59EKecfc/UwM3Z2pgVnI/…T-I/s1600/Line%2Bwith%2BLeonard%2Band%2BSally.JPG","http://image.dispatch.co.kr/dispatch_image/2012/4/23/201242315432929t_T5_24665.jpg","http://cfile21.uf.tistory.com/image/2559D44052BD5B981BF3E1","http://cfile4.uf.tistory.com/image/2577474552A0D5592C5499","http://image.newstomato.com/newsimg/2014/3/26/455382/1.jpg"]
	};
 */	/* 	 
	var jamjar = ${jamjar};
	var aUrl	= ${aUrl};
	 */	
	 var jamjar = ${jamjar};
	 var userDataModel = {
			 originalURL : jamjar.photolist
	 }
	</script>
	<script type="text/javascript" src="./src/js/result/slide.js"/></script>
	<script type="text/javascript" src="./src/js/result/json.js"/></script>
</html>

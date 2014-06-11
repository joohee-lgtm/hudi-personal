<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0,
	maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="./src/css/common.css" />
<link rel="stylesheet" type="text/css" href="./src/css/result.css" />
<title>mobile result page</title>
</head>
<body>
	<header>
		<a>collageJam</a>
	</header>
	<section id="resultWrap">
		<article id="player"></article>
		<article id="slide"></article>
	</section>
	<section id="btn">
		<button>play</button>
		<button>stop</button>
	</section>
	<section id="info">
				<li>
					<p class="k">producer</p>
					<p class="v"></p>
				</li>
				<li>
					<p class="k">title</p>
					<p class="v"></p>
				</li>
				<li>
					<p class="k">description</p>
					<p class="v"></p>
				</li>
				<li>
					<p class="k">background youtube</p>
					<p class="v"></p>
				</li>
				<li>
					<p class="k">created date</p>
					<p class="v"></p>
				</li>
	</section>
	<footer></footer>
</body>
<script>
	var slidetotal = document.getElementById("resultWrap");
	var slide = document.getElementById("slide");
	slide.style.height = window.getComputedStyle(slide).width;
	var jamjar = {
		bgm_url: "2GRP1rkE4O0",
		date_created: "Jun 11, 2014 3:49:13 PM",
		description: "b",
		j_id: 293,
		likes: 0,
		sec_per_img: 180,
		tb_url: "http://stickerlinedd.com/images/editor/stickerline/1103.png",
		title: "a",
		u_id: 0,
		views: 0,
		photolist : [
			"http://stickerlinedd.com/images/editor/stickerline/1103.png",
			"http://stickerlinedd.com/modules/product/upload/images/13-08-22-17c27.png",
			"http://1.bp.blogspot.com/-AlE59EKecfc/UwM3Z2pgVnI/AAAAAAAA12c/4esJXPuaT-I/s1600/Line+with+Leonard+and+Sally.JPG",
			"http://1.bp.blogspot.com/-AlE59EKecfc/UwM3Z2pgVnI/AAAAAAAA12c/4esJXPuaT-I/s1600/Line+with+Leonard+and+Sally.JPG",
		]
	};
	
 	/* var jamjar = ${jamjar}; */
	var userDataModel = {
		originalURL : jamjar.photolist
	}
</script>
<script src="https://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript" src="./src/js/result/bgm.js" /></script>
<script type="text/javascript" src="./src/js/result/slide.js" /></script>
<script type="text/javascript" src="./src/js/result/info.js" /></script>

</html>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0,
	maximum-scale=1.0, minimum-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="./src/css/common.css" />
<link rel="stylesheet" type="text/css" href="./src/css/main.css" />
<link rel="stylesheet" type="text/css" href="./src/css/header.css" />
<meta charset="utf-8">
<title>Main</title>
</head>
<body>
	<div id="gotomobile">
		<p>Go Mobile Page</p>
		<p><a href="/collageJam/m/mobilemain.jsp">(click me)</a></p>
	</div>
	<header>
	<div>
		<a href="/collageJam/main.page"> CollageJam </a>
		<c:choose>
			<c:when test="${sessionScope.username!=null}">
				<a href="/collageJam/logout.next">logout</a>
				<a href="/collageJam/create.page">create</a>
				<span id="userid"> Hello, ${sessionScope.username} </span>
			</c:when>
			<c:otherwise>
				<a href="/collageJam/login.page">login</a>
				<a href="/collageJam/create.page">create</a>
				<span id="userid"> Hello, Anonymous </span>
			</c:otherwise>
		</c:choose>
	</div>
	</header>

	<section id="contents">
		<article id="bgvideo">
			<video autoplay loop muted
				poster="https://www.themusicbed.com/video/posters/home-the-music-bed.jpg">
				<source
					src="https://www.themusicbed.com/video/home-the-music-bed.mp4"
					type="video/mp4">
				<source
					src="https://www.themusicbed.com/video/home-the-music-bed.webm"
					type="video/webm">
			</video>
		</article>

		<article id="intro">
			<span>Your idea, your story.</span> <span>Create, explore
				photo & video collections in beautiful and creative ways</span> <a
				href="/collageJam/create.page">
				<div></div> <span> Start Now </span>
			</a> <span> or <a href="./signup.jsp"><u>Sign up</u></a> with
				Email
			</span>
		</article>

		<article id="aboutApp">
			<span>Top Rank : Like</span>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</article>

		<article id="countTotalView">
			<span> 999,999,999 </span>
			<div></div>
			<span> COLLAGEJAM MOMENTS VIEWD </span>	
		</article>

		<article id="featured">
			<span>FEATURED</span>
			<ul>
			</ul>
			<span>Start</span>
		</article>
	</section>

	<footer id="footer"></footer>
	<script>
		var recentData = ${recentData};
		var jarobjs = [];
		for ( var i = 0; i < 15; i++) {
			jarobjs[i] = recentData[recentData.length - i - 1];
		}
		var topJarObjs = [];
		var topRankData = ${topRankData};
		for (var i=0 ; i<15 ; i++){
			topJarObjs[i] = topRankData[i];
		}
		console.log(topJarObjs);
	</script>
	<script type="text/javascript" src="./src/js/main.js" /></script>
	<script type="text/javascript" src="./src/js/topLank.js" /></script>
	<script type="text/javascript" src="./src/lib/qunit-1.14.0.js" /></script>
	<script type="text/javascript" src="./src/js/maintest.js" /></script>
	
</body>
</html>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="./src/css/common.css" />
<link rel="stylesheet" type="text/css" href="./src/css/main.css" />
<link rel="stylesheet" type="text/css" href="./src/css/header.css" />
<meta charset="utf-8">
</head>
<body>
	<header>
		<div>
			<a href="/collageJam/main"> CollageJam </a> <a href="./mypage.jsp">
				myJamJars </a>


			<c:choose>
				<c:when test="${sessionScope.username!=null}">
					<a href="/collageJam/logout.do">logout</a>
				</c:when>
				<c:otherwise>
					<form method="post" action="/collageJam/login">
						<input type="submit" value="login" />
					</form>
				</c:otherwise>
			</c:choose>
			
			<a href="/collageJam/create">create</a>
		</div>
		<span id="userid"> Hello, ${sessionScope.username} </span>
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
			<span>Your moments, your story.</span> <span>Create, explore
				and share photo & video collections in beautiful and creative ways</span> <a
				href="/collageJam/create">
				<div></div> <span> Start Now </span>
			</a> <span> or <a href="./signup.jsp"><u>Sign up</u></a> with
				Email
			</span>
		</article>

		<article id="aboutApp">
			<span>Share your story with our creative applications</span>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</article>

		<article id="countTotalView">
			<span> 999,999,999 </span>
			<div></div>
			<span> COLLAGEJAM MOMENTS VIEWD </span> <span> As featured in:
				<div></div>
			</span>
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
		var data = ${data};
		var jarobjs = [];
		for ( var i = 0; i < 15; i++) {
			jarobjs[i] = data[data.length - i - 1];
		}
	</script>
	<script type="text/javascript" src="./src/js/main.js" /></script>
</body>
</html>

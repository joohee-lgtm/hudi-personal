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
	<header id="header">
		<div>
			<a href="/collageJam/main"> CollageJam </a>
			<a href="./mypage.jsp"> myJamJars </a>
			<form method="post" action="./login.jsp">
 				<input type="submit" value="login"/>
			</form>
			<a href="/collageJam/create">create</a>
		</div>
    	<%
			String greeting = "Hello, ";
			String username = (String) session.getAttribute("username");
			//System.out.println("username: " + username);
			if(username == null)
				username = "anonymous";
		%>
		<span id="userid"> Hello, <%=username%></span>
	</header>
	<section id="contents">
		<section id="bgvideo">
			<video autoplay loop muted
				poster="https://www.themusicbed.com/video/posters/home-the-music-bed.jpg">
				<source
					src="https://www.themusicbed.com/video/home-the-music-bed.mp4"
					type="video/mp4">
				<source
					src="https://www.themusicbed.com/video/home-the-music-bed.webm"
					type="video/webm">
			</video>
		</section>
		<section id="intro">
			<span>Your moments, your story.</span> <span>Create, explore
				and share photo & video collections in beautiful and creative ways</span> <a
				href="/collageJam/create">
				<div></div> <span> Start Now </span>
			</a> <span> or <a href="./signup.jsp"><u>Sign up</u></a> with
				Email
			</span>
		</section>

		<section id="aboutApp">
			<span>Share your story with our creative applications</span>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</section>

		<div id="countTotalView">
			<span> 999,999,999 </span>
			<div></div>
			<span> COLLAGEJAM MOMENTS VIEWD </span> <span> As featured in:
				<div></div>
			</span>
		</div>

		<section id="featured">
			<span>FEATURED</span>
			<ul>
				<!--<div class="jar1">1</div>-->
			</ul>
			<span>Start</span>
		</section>
	</section>

	<!-- <footer id="footer"></footer> -->
	<script>
		var arr = ${data};
		var jarobjs = [];
		for (var i=0; i<15 ; i++){
			jarobjs[i] = arr[i];
		}
	</script>
	<script type="text/javascript" src="./src/js/main.js" /></script>
</body>
</html>

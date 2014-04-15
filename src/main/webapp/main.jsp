<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="./style/main.css"/>
	<meta charset="utf-8">
</head>
<body>
	<header id="header">
		<span id="homebt"> CollageJam </span>
		<span id="myjambt" > myJamJars </span>
		<button> create </button>
		<span id="singIn">Sign In</span>
		<form>
			<input type="text">
			<input type="password">
			<button> login </button>
		</form>
		<div id ="singbox">
		</div>
	</header>
	<section id="contents">
		<!--콜라쥬잼 소개 페이지-->
		<div id="bgvideo">
			<video autoplay loop muted poster="https://www.themusicbed.com/video/posters/home-the-music-bed.jpg" id="bgcontent">
   				<source src="https://www.themusicbed.com/video/home-the-music-bed.mp4" type="video/mp4">
    			<source src="https://www.themusicbed.com/video/home-the-music-bed.webm" type="video/webm">
    		</video>
		</div>
		<div id="intro">
			<!-- text 태그??? 
			여기에 접속해서 당신의 URL을 한번 입력해볼래요? 
			http://validator.w3.org/
			--> 
			<text id="title">Your moments, your story.</text>
			<text id="subtitle">Create, explore and share photo & video collections in beautiful and creative ways</text>
			<a href="http://google.com">
				<span><div></div>Start Now</span>
			</a>
			<span> 
				or <a href="http://google.com"><u>Sign up</u></a> with Eamil 
			</span>
		</div>
		<!--iOS 앱 소개-->
		<div id="aboutApp">
			<text>Share your story with our creative applications</text>
			<section>
			   <!-- id는 html페이지 중에 한군데에서만 사용해야 하고요. querySelector로 찾을때도 첫번째 것만 찾아져요. 이런경우는 class를 사용하는게 맞겠네요 --> 
			   <!-- 전반적으로 ID를 너무 많이 남용했어요 id를 써야 할 곳은 페이지의 레이아웃 바깥쪽 DIV정도 일 듯 합니다. --> 
				<div id = "appbox"></div><!--
				--><div id = "appbox"></div><!--
				--><div id = "appbox"></div><!--
				--><div id = "appbox"></div><!--
				--><div id = "appbox"></div><!--
				--><div id = "appbox"></div>
			</section>
		</div>
		<!--실시간 전체 시청수-->
		<div id="countTotalView">
			<span class='countView num'> 999,999,999 </span>
			<div></div>
			<span class='countView comment'> COLLAGEJAM MOMENTS VIEWD </span>
			<span class='asfeatured'>As featured in:<div></div></span>
		</div>
		<!-- 인기 비디오 보여주기 -->
		<div id="featured">
			<span>FETURED</span>
			<section id="jargrid">
				<div class="jamjar jar1"></div><!--
				--><div class="jamjar jar2"></div><!--
				--><div class="jamjar jar3"></div><!--
				--><div class="jamjar jar4"></div><!--
				--><div class="jamjar jar5"></div><!--
				--><div class="jamjar jar6"></div><!--
				--><div class="jamjar jar7"></div>
			</section>
		</div>
	</section>
	<footer id="footer">
		footer
	</footer>
	<!-- javascript 는 하단에 배치하는 거 좋아요 -->
	<script type="text/javascript" src="./script/main.js"/></script>
</body>
</html>
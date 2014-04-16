<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="./style/main.css"/>
	<meta charset="utf-8">
</head>
<body>
	<header id="header">
		<a> CollageJam </a>
		<a> myJamJars </a>
		<form>
			<input type="text" class="txtbox"/><!--
			--><input type="password" class="txtbox"/>
			<input type="submit" value="login"></input>
		</form>
		<a>create</a>
	</header>
	<section id="contents">
		<!--콜라쥬잼 소개 페이지-->
		<div id="bgvideo">
			<video autoplay loop muted poster="https://www.themusicbed.com/video/posters/home-the-music-bed.jpg" width="100%">
   				<source src="https://www.themusicbed.com/video/home-the-music-bed.mp4" type="video/mp4">
    			<source src="https://www.themusicbed.com/video/home-the-music-bed.webm" type="video/webm">
    		</video>
		</div>
		<div id="intro">
			<span>Your moments, your story.</span>
			<span>Create, explore and share photo & video collections in beautiful and creative ways</span>
			<a href="http://google.com"> 
				<div></div>
				<span>
					Start Now
				</span>
			</a>
			<span> 
				or <a href="http://google.com"><u>Sign up</u></a> with Eamil 
			</span>
		</div>
		<!--iOS 앱 소개-->
		<div id="aboutApp">
			<span>Share your story with our creative applications</span>
			<section>
				<div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div>
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
		<section id="featured">
			<span>FETURED</span>
			<div id="jargrid">
				<div class="jamjar jar1"></div><!--
				--><div class="jamjar jar2"></div><!--
				--><div class="jamjar jar3"></div><!--
				--><div class="jamjar jar4"></div><!--
				--><div class="jamjar jar5"></div><!--
				--><div class="jamjar jar6"></div><!--
				--><div class="jamjar jar7"></div>
			</div>
		</section>
	</section>
	<footer id="footer">
		footer
	</footer>
	<script type="text/javascript" src="./script/main.js"/></script>
</body>
</html>
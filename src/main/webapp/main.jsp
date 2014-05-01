<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="./style/common.css"/>
	<link rel="stylesheet" type="text/css" href="./style/main.css"/>
	<meta charset="utf-8">
</head>
<body>
	<header id="header">
		<a> CollageJam </a>
		<a> myJamJars </a>
		<form method="post" action="./login.jsp">
<!-- 			<input type="text" class="txtbox"/>
			<input type="password" class="txtbox"/>
 -->			<input type="submit" value="login"/>
		</form>
		<a href="./create.jsp">create</a>
	</header>
	<section id="contents">
		<section id="bgvideo">
			<video autoplay loop muted poster="https://www.themusicbed.com/video/posters/home-the-music-bed.jpg">
   				<source src="https://www.themusicbed.com/video/home-the-music-bed.mp4" type="video/mp4">
    			<source src="https://www.themusicbed.com/video/home-the-music-bed.webm" type="video/webm">
    		</video>
		</section>
		<section id="intro">
			<span>Your moments, your story.</span>
			<span>Create, explore and share photo & video collections in beautiful and creative ways</span>
			<a href="./create.jsp"> 
				<div></div>
				<span>
					Start Now
				</span>
			</a>
			<span> 
				or <a href="./signup.jsp"><u>Sign up</u></a> with Eamil 
			</span>
		</section>

		<section id="aboutApp">
			<span>Share your story with our creative applications</span>
			<div>
				<div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div>
			</div>
		</section>

		<div id="countTotalView">
			<span> 999,999,999 </span>
			<div></div>
			<span> COLLAGEJAM MOMENTS VIEWD </span>
			<span>
				As featured in:<div></div>
			</span>
		</div>

		<section id="featured">
			<span>FEATURED</span>
			<div>
				<div class="jamjar jar1">1</div><!--
				--><div class="jamjar jar2">2</div><!--
				--><div class="jamjar jar3">3</div><!--
				--><div class="jamjar jar4">4</div><!--
				--><div class="jamjar jar5">5</div><!--
				--><div class="jamjar jar6">6</div><!--
				--><div class="jamjar jar7">7</div><!--
				--><div class="jamjar jar8">8</div><!--
				--><div class="jamjar jar9">9</div><!--
				--><div class="jamjar jar10">10</div><!--
				--><div class="jamjar jar11">11</div><!--
				--><div class="jamjar jar12">12</div><!--
				--><div class="jamjar jar13">13</div><!--
				--><div class="jamjar jar14">14</div><!--
				--><div class="jamjar jar15">15</div><!--
				--><div class="jamjar jar16">16</div><!--
				--><div class="jamjar jar17">17</div>
			</div>
			<span>Start</span>
		</section>
	</section>

	<footer id="footer">
		footer
	</footer>
	<script type="text/javascript" src="./script/main.js"/></script>
	
</body>
</html>

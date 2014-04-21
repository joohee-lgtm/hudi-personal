<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE>
<html>
<head>
<!-- href뒤에 경로를 보면 ./style/.. 로 되어 있는데요. 웹사이트의 경로가 어떤 이유로 변경될 수도 있으니 항상 절대경로로 작성하는 게 더 좋아요
	href="/style/commot.css"   이라고 하면 되겠네요.  지금상황에서 '.'은 불필요하겠어요.
-->
	<link rel="stylesheet" type="text/css" href="./style/common.css"/>
	<link rel="stylesheet" type="text/css" href="./style/main.css"/>
	<meta charset="utf-8">
</head>
<body>
	<header id="header">
		<a> CollageJam </a>
		<a> myJamJars </a>
		<form>
			<input type="text" class="txtbox"/><!--
			--><input type="text" class="txtbox"/>
			<input type="submit" value="login"/>
		</form>
		<a>create</a>
	</header>
	<section id="contents">
		<!--ì½ë¼ì¥¬ì¼ ìê° íì´ì§-->
		<section id="bgvideo">
			<video autoplay loop muted poster="https://www.themusicbed.com/video/posters/home-the-music-bed.jpg">
   				<source src="https://www.themusicbed.com/video/home-the-music-bed.mp4" type="video/mp4">
    			<source src="https://www.themusicbed.com/video/home-the-music-bed.webm" type="video/webm">
    		</video>
		</section>
		<section id="intro">
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
		</section>

		<!--iOS ì± ìê°-->
		<section id="aboutApp">
			<span>Share your story with our creative applications</span>
			<!-- 껍데기 div 하위에 5개의 div가 있고 모두 appbox라는 클래스를 가지고 있는데요. 
				 차라리 위에다만 class를 하나 선언하고 하위 div는 selector로 선택하면 되지 않을까요?
				 아래처럼..
			<div class="appbox">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			.appbox > div {
				//어쩌구 저쩌구 css 속성들..
			}
			-->

			<div>
				<div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div><!--
				--><div class = "appbox"></div>
			</div>
		</section>

		<!--ì¤ìê° ì ì²´ ìì²­ì-->
		<div id="countTotalView">
			<span> 999,999,999 </span>
			<div></div>
			<span> COLLAGEJAM MOMENTS VIEWD </span>
			<span>
				As featured in:<div></div>  <!-- 테스트코드인가요? 가끔 빈 div가 그냥 보여요 -->
			</span>
		</div>
		<!-- ì¸ê¸° ë¹ëì¤ ë³´ì¬ì£¼ê¸° -->
		<section id="featured">
			<span>FEATURED</span>
			<div>
				<!-- 클래스이름... 지금보면 jar 2,3,4,5,6... 이렇게 쭉 쓰는 걸 좀 없애고 다른 방법은 없을까요? (물론 이게 테스트를 위한 코드라면 이해함)
				javascript로 onload 이후에 height값을 넣어줄 수 있지 않을까요? 

				또 한가지 아래는 그냥 리스트죠? 리스트 관련 html 태그가 있지 않나요? 
				-->
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
		</section>
	</section>

	<!-- 페이지에 footer 가 여러개면 모를까 footer 태그에 동일한 이름의 id를 만들 필요는 없을 듯.. -->
	<footer id="footer">
		footer
	</footer>
	<!-- css 처럼 ./ 를 그냥 /로 바꾸면 됨 -->
	<script type="text/javascript" src="./script/main.js"/></script>
</body>
</html>
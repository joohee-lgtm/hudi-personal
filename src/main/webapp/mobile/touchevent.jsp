<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0,
	maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" />
<title> 터치 이벤트 활용 예제 </title>

<script type="text/javascript">
	window.onload = function() {
		document.addEventListener('touchstart',function(){
			console.log(event);
		}, false);

		document.getElementById('h').addEventListener('touchstart', function(){
			console.log("aaa");
		}, false);

		document.getElementById('h').addEventListener('touchmove', function(){
			console.log("touchmove");
		}, false);

		document.getElementById('h').addEventListener('touchend', function(){
			console.log("touchend");
		}, false);
	};

</script>
<style>
	#h {
		background-color: yellow;
		border: 1px solid;
	}
	#p {
		background-color: green;
		border: 1px solid;
	}
	#s {
		background-color: red ;
		border: 1px solid;
	}
</style>

</head>
<body>
	<div id="h">
		aaa
		<!-- p 태그를 클릭하면 이벤트 버블링으로 인해 경고창이 p > h 순으로 출력 -->
<!-- 		<div id="p">
			p
			<div id='s'>s</span>
		</div>
 -->	</div>
</body>
</html>
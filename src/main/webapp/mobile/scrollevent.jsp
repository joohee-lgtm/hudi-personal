<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
	<style type="text/css">
	#inScroll {
		height : 200px;
		width : 100%;
		overflow : scroll;
		-webkit-overflow-scrolling : touch;
	}

	#inScroll > div {
		height : 1000px;
		background-color: red;
	}

	#log {
		position : fixed;
		top : 0px;
		background-color: red;
		color : #FFFFFF;
		width: 100%;
		margin : 0 0 0 0;
		padding : 20px;
	}

	#log2 {
		position : fixed;
		top : 50px;
		background-color: green;
		color : #FFFFFF;
		width: 100%;
		margin : 0 0 0 0;
		padding : 20px;
	}


	</style>
</head>

<body style="margin : 0 0 0 0;">
	<div id="log">
		scroll 이벤트 발생 횟수 : 0, 스크롤 위치 : 0
	</div>
	<div id="log2">
	</div>
	<div style="height:2000px">
	</div>


	<!-- <div id="inScroll">
		<div>
			<br/>
			<br/>
			<br/>
			overflow:scroll 속성이 있는 요소
		</div>
	</div> -->
	<script type="text/javascript">

		var i=0;
		var j=1;
		var a = [];
		var bScrollContinue = false;
		var bMoveContinue = false;
		document.addEventListener("scroll", function(){
			i++;
			if(bScrollContinue){
				a.pop();
				j++;
			} else {
				j = 1;
			}
			bScrollContinue = true;
			bMoveContinue=false;
			a.push("scroll("+j+")");
			document.getElementById('log2').innerHTML = a.join("<br>");
			document.getElementById('log').innerHTML = "scroll 이벤트 발생 횟수 : " + i + ", 스크롤 위치 : " + document.body.scrollTop;
		});

		document.addEventListener("touchstart", function(){
			bScrollContinue = false;
			bMoveContinue = false;
			a.push("touchstart");
			document.getElementById("log2").innerHTML = a.join("<br>");
		});

		document.addEventListener("touchmove",function(){
			if (bMoveContinue){
				a.pop();
				j++;
			} else {
				j=1;
			}
			bMoveContinue = true;
			bScrollContinue = false;
			a.push("touchmove (" + j + ")");
			document.getElementById("log2").innerHTML = a.join("<br>");
		});

		document.addEventListener("touched", function(){
			bScrollContinue = false;
			bMoveContinue = false;
			a.push("touched");
			document.getElementById("log2").innerHTML = a.join("<br>");
		});

		// document.getElementById("inScroll").addEventListener("scroll",function(e){
		// 	alert("스크롤 이벤트 발생");
		// });
	</script>
</body>

</html>
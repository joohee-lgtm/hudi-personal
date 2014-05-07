<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
</head>
<body style="margin:0">
	<div style="height:3000px; background-color : lightgrey">
		<!-- 스크롤을 위한 3000px의 빈 영역 -->
	</div>
	<div style="position:fixed; bottom:0px">
		<img id = "imgArea" src="../images/comave.jpg" style="width:200px;"></img>
	</div>
	<script type="text/javascript">
		document.addEventListener("scroll",function(e){
			console.log(document.body.scrollTop, window.innerHeight);

			if(document.body.scrollTop > window.innerHeight - 200){
				document.getElementById("imgArea").src = "../images/nophoto.jpg";
			} else {
				document.getElementById('imgArea').src = "../images/comave.jpg";
			}
		});
	</script>

</body>
</html>
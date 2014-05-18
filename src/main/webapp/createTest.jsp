<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>자바스크립트에서 전달하기</title>
</head>
<body>
<form method="POST">
	<input type="text" name="title">
	<input type="text" name="comment">
	<input type="submit" value="제출">
</form>
</body>
<script language="javascript">

var submit = document.getElementsByTagName('form')[0].children[2];
var url_array = ["http://www.w3schools.com/jsref/jsref_encodeuricomponent.asp",
                 "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_encodeuricomponent",
                 "https://www.takeflava.com/"];

submit.addEventListener("click", function(e){
	e.preventDefault();
	var data = {
		user : "tempuser",
		title : submit.parentNode.children[0].value,
		desc : submit.parentNode.children[1].value,
		background : "http://www.youtube.com/watch?v=npttud7NkL0",
		thumbnail : "http://image.ytn.co.kr/general/jpg/2013/1218/201312181042081641_h.jpg",
		urls : url_array
	};

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/collageJam/createjar");
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			console.log(xhr.statusText);
		}
	};	
	xhr.send("data="+JSON.stringify(data));
	console.log(JSON.stringify(data));
}, false);

</script>
</html>
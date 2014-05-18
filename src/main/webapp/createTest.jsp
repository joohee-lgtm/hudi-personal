<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>자바스크립트에서 전달하기</title>
</head>
<body>
<form method="POST" action="/collageJam/jstest">
	<input type="text" name="title">
	<input type="text" name="comment">
	<input type="submit" value="제출">
</form>
</body>
<script language="javascript">

var submit = document.getElementsByTagName('form')[0].children[2];

submit.onclick = function(e){
	e.preventDefault();
	
	var t = submit.parentNode.children[0].value;
	var c = submit.parentNode.children[1].value;
	var a = ["http://www.w3schools.com/jsref/jsref_encodeuricomponent.asp",
	           "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_encodeuricomponent",
	        	"https://www.takeflava.com/"];

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/collageJam/jstest");
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			console.log(xhr.statusText);
		}
	};
	
	var data = "title=" + t + "&comment=" + c +"&arr=" + a;
	json = {title : t, comment : c, arr : a};
	console.log(JSON.stringify(json));
	xhr.send("data="+JSON.stringify(json));

};
</script>
</html>
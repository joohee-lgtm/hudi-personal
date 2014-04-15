<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>iRock - The Virtual Pet Rock</title>
<script type="text/javascript">

function touchRock() {
	var userName = prompt("What is your name?", "Enter your name here.");
	
	if (userName) {
		alert("It is a good to meet you, " + userName + ".");
		document.getElementById("rockImg").src = "rock_happy.png";
	}
}

</head>
<body onload="alert('Hello, I am your slave pet rock.');">
		<div style="margin-top:100px"; text-align="center">
		<img id="rockImg" src="rock.png" alt="iRock" />
		</div>
</body>
</html>
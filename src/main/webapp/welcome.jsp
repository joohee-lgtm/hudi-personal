<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<title>Insert title here</title>
</head>
<body>
	<h3>Welcome!</h3>
	<%String username = (String)request.getAttribute("USERNAME"); %>
	
	your name: <%= username%> <br><br>
	<a href='logout.jsp'>Log out</a>
</body>
</html>
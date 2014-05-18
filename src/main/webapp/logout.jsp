<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		session.setAttribute("username", null);
		session.invalidate();
		response.sendRedirect("login.jsp");
	%>
</body>
</html>
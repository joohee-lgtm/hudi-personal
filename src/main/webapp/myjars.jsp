<%@ page language="java" contentType="text/html; charset=euc-kr"
    pageEncoding="US-ASCII"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<title>My Page</title>
</head>
<body>
<%
	String id = (String) session.getAttribute("ID");
	out.println(id + " page");
%>
</body>
</html>
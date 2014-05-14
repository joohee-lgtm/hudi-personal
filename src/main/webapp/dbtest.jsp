<%--
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="EUC-KR"%>
 <!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
</head>
<body>
	re : <%= request.getAttribute("RE") %> <Br>
	conn : <%= request.getAttribute("conn") %> <Br>
	re : ${RE}<br>
	conn : ${conn}<br>
</body>
</html>
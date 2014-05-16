<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<script>
		var json_obj = ${DBobj};
		console.log(json_obj[0].email);
	</script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>디비에서 정보 가져오기</title>
</head>
<body>
안녕?<br>

<!-- <c:forEach begin="1" end="2">
	${DBobj}
</c:forEach>
 --></body>
</html>
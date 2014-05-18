<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>디비에서 정보 가져오기</title>
</head>
<body>
안녕?<br>
<article></article>

	<script>
		var json_obj = ${DBobj};

		for (var i=0; i<json_obj.length; i++){
			var span = document.createElement("span");
			var tn = document.createTextNode(json_obj[i].tb_url);
			span.appendChild(tn);
			document.getElementsByTagName('article')[0].appendChild(span);
		};

	</script>

</body>
</html>
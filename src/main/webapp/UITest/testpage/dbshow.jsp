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
		var json_obj = ${data};

		for (var i=0; i<json_obj.length; i++){
			var div = document.createElement("div");
			var br = document.createElement("br");
			
			var tb = document.createTextNode(json_obj[i].tb_url);
			var title = document.createTextNode(json_obj[i].title);
			var time = document.createTextNode(json_obj[i].date_created);

			div.appendChild(tb);
			div.appendChild(br);
			div.appendChild(title);
			div.appendChild(br);
			div.appendChild(time);
			div.appendChild(br);
			
			document.getElementsByTagName('article')[0].appendChild(div);
			document.getElementsByTagName('article')[0].appendChild(br);
			document.getElementsByTagName('article')[0].appendChild(br);
		};

	</script>

</body>
</html>
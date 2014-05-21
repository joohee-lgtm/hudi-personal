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
	// 별거 아니지만 함수로 묶어두는 게 좋을 듯. 이렇게 짧은 코드를 바로 실행시키려면 즉시실행함수를 사용할 수 있습니다 
	// 즉시 실행함수가 무엇인지 한 번 공부해보세요(html_javascript advanced 과목 관점에서 공부해야 할 내용임)
		var json_obj = ${data};

		for (var i=0, jsonLen = json_obj.length ; i < jsonLen ; i++){  //이렇게 length를 미리 계산해서 변수에 담아두고 사용하는 게 더 빠름.
		//for (var i=0; i<json_obj.length; i++){
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
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

	<script>
		var data = ${data};
		var jarobjs = [];
		for ( var i = 0; i < 15; i++) {
			jarobjs[i] = data[data.length - i - 1];
		}
		console.log(data);
	</script>

</body>

</html>
<%@ page language="java" contentType="text/html; charset=US-ASCII"
	pageEncoding="US-ASCII"%>

<!-- jsp 파일별로 DTD를 다르게 가지 말고 일관성을 유지하세요. HTML의 5번째 버전인 HTML5에서의 DTD는 아주 간단히 작성할 수 있어요. DTD가 의미하는 게 무엇인지도 찾아보세요 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!-- 브라우저에게 이 페이지의 인코딩이 무엇이에요 라고 알려주는 게 charset인데요...US-ASCII ?? -->
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<title>Insert title here</title>
</head>
<body>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Registration</title>
</head>
<body>
	<form method="post" action="register.do">
		<center>
		    <!-- table 태그는 table로 표시해야 할 정보들(가로/세로기반의 데이터들)을 보여주려는 목적이 아니고 레이아웃을 만드는 목적이라면 사용을 자제하는 게 좋아요. -->
			<table border="1" width="30%" cellpadding="5">
				<thead>
					<tr>
						<th colspan="2">Enter Information Here</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>User Name</td>
						<td><input type="text" name="username" value="" /></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input type="password" name="password" value="" /></td>
					</tr>
					<tr>
						<td><input type="submit" value="Submit" /></td>
						<td><input type="reset" value="Reset" /></td>
					</tr>
					<tr>
						<td colspan="2">Already registered!! <a href="login.jsp">Login
								Here</a></td>
					</tr>
				</tbody>
			</table>
		</center>
	</form>
</body>
</html>
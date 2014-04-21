<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE>
<html>
<head>
<!-- jsp인코딩과 아래 charset인코딩이 다르다...-->
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
			<!-- table은 예전에 많이 사용했었어요. 하지만 tag가 복잡해지고 그 태그의 의미를 알수 없기때문에 이제는 잘 사용하지 않아요. 
			div나 section, ul,li등으로 사용하세요. 
			table은 정말 행/열로 어떤 데이터를 표현하는 것을 사용할 때나 사용합니다. 
			아래 id/pw입력하는 것이 데이터를 표현하는 양식은 아닌거죠?
			-->
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
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<title>Insert title here</title>
</head>
<body>
<head>
<title>Sign up</title>
<!--  width="30%" cellpadding="5" -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Registration</title>
</head>
<body>
	<form method="post" action="register.next">
		<table border="1" style="{width : 30%; cellpadding : 5px;}">
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
					<td>Email</td>
					<td><input type="text" name="email" value="" /></td>
				</tr>
				<tr>
					<td><input type="submit" value="Submit" /></td>
					<td><input type="reset" value="Reset" /></td>
				</tr>
				<tr>
					<td colspan="2">Already registered!! <a href="login.next">Login
							Here</a></td>
				</tr>
			</tbody>
		</table>
	</form>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="./src/css/common.css"/>
	<link rel="stylesheet" type="text/css" href="./src/css/login.css"/>
</head>
<body>
	<header id="header">
		<a href="./main.jsp"> CollageJam </a>
	</header>

	<form method="post" action="login.do">
		<input type="text" name="username" placeholder="Username"><br>
		<input type="password" name="password" placeholder="password">
		<input type="submit" value="submit">
		<a href="./signup.jsp">not a member?</button>
	</form>
</body>
</html>

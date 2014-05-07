<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="./style/common.css"/>
	<link rel="stylesheet" type="text/css" href="./style/login.css"/>
</head>
<body>
	<header id="header">
		<a href="./main.jsp"> CollageJam </a>
	</header>

	<form method="post" action="login.do">
		<input type="text" name="username" placeholder="Username"><br>
		<input type="password" name="password" placeholder="password">
		<input type="submit" value="submit">
	</form>
</body>
</html>
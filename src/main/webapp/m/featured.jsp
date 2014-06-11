<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0,
	maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="./src/css/common.css" />
<link rel="stylesheet" type="text/css" href="./src/css/featured.css" />
<title>mobile featured page</title>
</head>
<body>
	<header>
		<a>Collage Jam</a>
	</header>
	<h1>featured</h1>
	<article>
		<ul>
			<li>
				<span>title</span>
				<div>img</div>
				<span>desc</span>
			</li>
			<li>
				<span>title</span>
				<div>img</div>
				<span>desc</span>
			</li>
		
		</ul>
	</article>
	<button>see more</button>
	<script>
		var data = ${data};
		data.reverse();
		console.log(data);
	</script>
	<script type="text/javascript" src="./src/js/featured.js" /></script>
</body>
</html>
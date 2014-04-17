<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>JSP Page Counter</title>
</head>
<body>
	The friends who share your hobby of
	<%=request.getParameter("hobby")%>
	are:
	<br>
	<%
		ArrayList al = (ArrayList) request.getAttribute("names");
	%>
	<%
		Iterator it = al.iterator();
		while (it.hasNext()) {
	%>
	<%=it.next()%>
	<br>
	<%
		}
	%>



	<%!
		public void jspInit() {
		// 나중에 서블릿이 되기 때문에 상속받은 getServletConfig 호출 가능.
		ServletConfig sConfig = getServletConfig();
		
		// 일반 서블릿에서 하던 방식.
		String emailAddr = sConfig.getInitParameter("email");
		
		// ServletContext 객체의 참조를 리턴받아서 application 생존 범위 속성에 설정.
		ServletContext ctx = getServletContext();
		ctx.setAttribute("email", emailAddr);
		}
	%>

</body>
</html>
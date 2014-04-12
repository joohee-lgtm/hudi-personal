package headFirst;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class BeerSelect extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		out.println("Beer Selection Advice<br>");
		String colorParam = req.getParameter("color");
		String bodyParam = req.getParameter("body");
		out.println("<br>Got beer color " + colorParam + " with " + bodyParam);
		
		String client = req.getHeader("User-Agent");
		out.println("<br>User-Agent: " + client);
		
		Cookie[] cookies = req.getCookies();
		out.println("<br>Cookies: " + cookies);
		
		HttpSession session = req.getSession();
		out.println("<br>Sessions: " + session);
		
		String theMethod = req.getMethod();
		out.println("<br>Method: " + theMethod);
		
		InputStream input = req.getInputStream();
		out.println("<br>input: " + input);
	}
}

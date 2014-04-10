package test;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet{
	public void doPost (HttpServletRequest request, HttpServletResponse response) throws IOException
	{	
		PrintWriter out = response.getWriter();
		String username = request.getParameter("username");
		out.println("user name: " + username);
		
		User u = new User();
		Connection c = u.connect();
		//u.close(c);
	}
}

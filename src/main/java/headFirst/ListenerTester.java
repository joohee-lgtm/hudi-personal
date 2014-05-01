package headFirst;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ListenerTester extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
		
		out.println("test context attributes set by listener<br>");
		out.println("<br>");
		
		Dog dog = (Dog) getServletContext().getAttribute("dog");
		out.println("Dog's breed is: " + dog.getBreed());
	}
}

package headFirst;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.*;
import javax.servlet.*;

public class Ch1Servlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		java.util.Date today = new java.util.Date();
		out.println("<html>" + "<h1 align=center>Woonohyo\'s HF Chapter1 Servlet</h1>" + "<br>" + today + "</body>" + "</html>");
		//super.doGet(req, resp);
	}
}
 
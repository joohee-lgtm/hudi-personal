package headFirst;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

public class TestInitParams extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/html");
		PrintWriter out = resp.getWriter();
//		HttpSession session = req.getSession();

		out.println("<html><body>");
		out.println("<a href=\"" + resp.encodeURL("/BeerTest.do")
				+ "\"> click me </a>");
		out.println("</body></html>");
		OutputStream os = resp.getOutputStream();
		os.flush();

		Cookie[] cookies = req.getCookies();
		for (Cookie eachCookie : cookies) {
			if (eachCookie.getName().equals("username")) {
				String userName = eachCookie.getValue();
				out.println("Hello " + userName);
				break;
			}
		}
		
	}
}

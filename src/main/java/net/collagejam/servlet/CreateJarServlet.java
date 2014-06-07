package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.collagejam.web.CreateJarController;
import net.collagejam.web.SearchJarController;

public class CreateJarServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("create jar servlet connection");
		String data = request.getParameter("data");

		HttpSession session = request.getSession();
		String username = (String) session.getAttribute("username");
		CreateJarController cjc = new CreateJarController(data, username);
		cjc.saveData();
		SearchJarController sjc = new SearchJarController(cjc.getJarId());
		int jarid = cjc.getJarId();
		String url = "/collageJam/result?id="+jarid; 
        response.setContentType("text/plain;charset=euc-kr");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.addIntHeader("jid", jarid);
	}
}

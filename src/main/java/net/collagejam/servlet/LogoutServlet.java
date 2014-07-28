package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LogoutServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws IOException, ServletException{
		System.out.println("In [" + this.getClass().getName() +"]");
		
		HttpSession session = request.getSession();
		session.invalidate();
		response.sendRedirect("/collageJam/main");
	}
}


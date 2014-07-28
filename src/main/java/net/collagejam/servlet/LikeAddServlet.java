package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.collagejam.web.CreateJarController;
import net.collagejam.web.LikeAddController;
import net.collagejam.web.SearchJarController;

public class LikeAddServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		
		System.out.println("In [" + this.getClass().getName() +"]");
		
		String data = request.getParameter("data");
		System.out.println(data);
		
		LikeAddController lac = new LikeAddController(data);
		lac.updateDB();
	}
}

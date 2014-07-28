package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.collagejam.web.MainFeaturedController;

import org.json.JSONArray;

public class CreatePageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("In [" + this.getClass().getName() +"]");
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("create.jsp");
		dispatcher.forward(request, response);
	}
}

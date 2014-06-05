package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.collagejam.web.MainFeaturedController;

import org.json.JSONArray;


public class ResultPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("result page sevlet");
		String i = request.getParameter("id");
		System.out.println(i);
		request.setAttribute("id", i);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
		dispatcher.forward(request, response);
	}
}

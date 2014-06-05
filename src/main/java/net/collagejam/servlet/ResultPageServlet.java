package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.collagejam.web.MainFeaturedController;
import net.collagejam.web.SearchJarController;

import org.json.JSONArray;


public class ResultPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("result page servlet");
		int jid = Integer.parseInt(request.getParameter("id"));
		request.setAttribute("id", jid);
		System.out.println(jid);
		
		SearchJarController sjc = new SearchJarController(jid);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
		dispatcher.forward(request, response);
	}
}

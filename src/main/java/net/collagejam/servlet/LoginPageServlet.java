package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.collagejam.web.MainFeaturedController;

import org.json.JSONArray;

public class LoginPageServlet extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("login page servlet connection");
		RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
		dispatcher.forward(request, response);
	}

}

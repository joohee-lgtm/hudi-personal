package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.DURU.dao.MainFeaturedDAO;

public class MobileMainPageServlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("In [" + this.getClass().getName() +"]");
		
		MainFeaturedDAO mfc = new MainFeaturedDAO();
//		String finalQuery = mfc.getTopLikedSlides();
//		JSONArray rows = mfc.getRows();
		
//		request.setAttribute("data", rows);
		RequestDispatcher dispatcher = request.getRequestDispatcher("/m/main.jsp");
		dispatcher.forward(request, response);
	}
}

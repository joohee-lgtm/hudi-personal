package net.collagejam.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.aprilchoi.user.JamjarDao;
import net.collagejam.web.MainFeaturedController;
import net.collagejam.web.SearchJarController;

import org.json.JSONArray;


public class ResultPageServlet extends HttpServlet{
	private JamjarDao dao;
	
	public void setup() throws Exception{
		dao = new JamjarDao(getConnection());
	}
	
	private Connection getConnection() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
	}

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

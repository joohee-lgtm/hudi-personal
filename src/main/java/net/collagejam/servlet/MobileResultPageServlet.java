package net.collagejam.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.DURU.dao.JamjarDao;
import com.DURU.dao.PhotoDao;
import com.DURU.model.JamJar;
import com.google.gson.Gson;

public class MobileResultPageServlet extends HttpServlet{
	private Connection getConnection() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("In [" + this.getClass().getName() +"]");
		
		
		int jid = Integer.parseInt(request.getParameter("id"));

		Connection conn = null;
		JamJar selected = null;
		ArrayList<String> aUrl = null;
		Gson gson = new Gson();
		
		try {
			conn = getConnection();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		ApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext());
		
		JamjarDao jdao = context.getBean("jamjarDao", JamjarDao.class);
		PhotoDao pdao	= context.getBean("photoDao", PhotoDao.class);
		
		try {
			selected = jdao.selectByJarId(conn, jid);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		try {
			aUrl = pdao.selectListOfPhotosByJarId(conn, jid);
		} catch (SQLException e) {
			// TODO Auto-generated cat ch block
			e.printStackTrace();
		}
		selected.setPhotolist(aUrl);
		String jarJson = gson.toJson(selected);
		request.setAttribute("jamjar", jarJson);

		response.setContentType("text/html; charset=euc-kr");
		RequestDispatcher dispatcher = request.getRequestDispatcher("/m/result.jsp");
		dispatcher.forward(request, response);
	}

	private JSONArray getJsonArray(ArrayList<String> aUrl) {
		JSONArray arr 	= new JSONArray(aUrl);
		return arr;
	}
}

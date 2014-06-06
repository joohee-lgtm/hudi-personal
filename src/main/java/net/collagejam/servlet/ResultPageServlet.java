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

import net.aprilchoi.user.JamjarDao;
import net.aprilchoi.user.PhotoListDao;
import net.collagejam.obj.JamJar;

import com.google.gson.Gson;


public class ResultPageServlet extends HttpServlet{
	private JamjarDao jdao;
	private PhotoListDao pldao;
	
	private Connection getConnection() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
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
		
		jdao	= new JamjarDao(conn);
		pldao	= new PhotoListDao();
		
		try {
			selected = jdao.selectByJarId(jid);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		try {
			aUrl = pldao.getUrlList(jid);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String jarJson = gson.toJson(selected);
		request.setAttribute("id", jid);
		request.setAttribute("jamjar", jarJson);
		request.setAttribute("aUrl", aUrl);
		RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
		dispatcher.forward(request, response);
	}
}

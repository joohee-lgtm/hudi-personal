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
import net.collagejam.obj.JamJar;


public class ResultPageServlet extends HttpServlet{
	private JamjarDao jdao;
	
	private Connection getConnection() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		int jid = Integer.parseInt(request.getParameter("id"));
		request.setAttribute("id", jid);
		System.out.println(jid);
		Connection conn = null;
		JamJar jarInstance = null;
		try {
			conn = getConnection();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		jdao = new JamjarDao(conn);
		try {
			jarInstance = jdao.selectByJarId(jid);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(jarInstance.toString());
		request.setAttribute("jamjar", jarInstance);
		RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
		dispatcher.forward(request, response);
	}
}

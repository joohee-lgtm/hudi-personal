package test;

import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.sql.*;

public class DBConnection extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		String success = "DB Connection Seccess";
		String fail = "DB Connection fail";
		String con_s = "driver manager success";
		System.out.print("connection start\n");

		Connection conn = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");
			try {
				conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
				request.setAttribute("conn", con_s);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		if (conn != null){
			request.setAttribute("RE", success);
		} else {
			request.setAttribute("RE", fail);
		}
		RequestDispatcher dispatcher = request.getRequestDispatcher("dbtest.jsp");
		dispatcher.forward(request, response);
	}
}
package test;

import javax.servlet.http.*;
import javax.servlet.*;
import java.io.*;
import java.sql.*;

public class DBConnection extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		String success = "DB Connection Seccess";
		String fail = "DB Connection fail";
		
		System.out.print("connection start\n");

		Connection conn = null;

		try {
			System.out.print("com.mysql.jdbc.Driver start\n");
			Class.forName("com.mysql.jdbc.Driver");
			System.out.print("com.mysql.jdbc.Driver end\n");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			System.out.print("get connection start\n");
			conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
			request.setAttribute("conn", "get connection");
			System.out.print("get connection end\n");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.print("connection none\n");
			e.printStackTrace();
			request.setAttribute("conn", "get connection none");
		}

		if (conn != null){
			System.out.print("connection success\n");
			request.setAttribute("RE", success);
		} else {
			System.out.print("connection fail");
			request.setAttribute("RE", fail);
		}
		RequestDispatcher dispatcher = request.getRequestDispatcher("dbtest.jsp");
		dispatcher.forward(request, response);
		System.out.print(request.getAttribute("RE"));
	}
}
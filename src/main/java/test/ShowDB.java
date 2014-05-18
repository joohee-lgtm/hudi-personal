package test;

import javax.servlet.http.*;
import javax.servlet.*;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.*;
import java.sql.*;

public class ShowDB extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		Connection conn = null;
		Statement stmt = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			try {
				// local database
				conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/collageJam", "devtest", "0000");
			} catch (SQLException e) {
				e.printStackTrace();
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		if (conn == null){
			// connection fail;
		}
		
		try {
			stmt = conn.createStatement();
			String sql = "select * from user";
			ResultSet rs = stmt.executeQuery(sql);
			JSONArray json_arr = new JSONArray();
			while (rs.next()){
				JSONObject json_obj = new JSONObject();
				json_obj.put("u_id", rs.getInt("u_id"));
				json_obj.put("email", rs.getString("email"));
				json_obj.put("username", rs.getString("username"));
				json_arr.put(json_obj);
			}
			request.setAttribute("DBobj", json_arr);
			RequestDispatcher dispatcher = request.getRequestDispatcher("dbshow.jsp");
			dispatcher.forward(request, response);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}	
}


// develop server storage
// conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");

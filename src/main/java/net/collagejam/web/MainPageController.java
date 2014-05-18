package net.collagejam.web;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class MainPageController {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		Connection conn = null;
		Statement stmt = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			try {
				conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/CollageJam", "devtest", "0000"); // local
				//conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911"); // dev server
			} catch (SQLException e) {
				e.printStackTrace();
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		if (conn == null){
			// connection fail;
		} else {
			try {
				stmt = conn.createStatement();
				String sql = selectSql("jamjar", "tb_url");
				ResultSet rs = stmt.executeQuery(sql);
				JSONArray json_arr = new JSONArray();
				while (rs.next()){
					json_arr.put(columnToJsonObj(rs));
					
				}
				request.setAttribute("DBobj", json_arr);
				RequestDispatcher dispatcher = request.getRequestDispatcher("dbshow.jsp");
				dispatcher.forward(request, response);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	String selectSql(String table, String column){
		return "select " + column + " from " + table;
	}
	
	JSONObject columnToJsonObj(ResultSet rs){
		
		return null;
	}
	
	
	
//	json_obj.put("u_id", rs.getInt("u_id"));
//	json_obj.put("email", rs.getString("email"));
//	json_obj.put("username", rs.getString("username"));
//	json_arr.put(json_obj);

}

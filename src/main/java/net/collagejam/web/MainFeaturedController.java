package net.collagejam.web;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MainFeaturedController extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		Connection conn = null;
		Statement stmt = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			try {
				//conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/CollageJam", "devtest", "0000"); // local
				conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911"); // dev server
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
				String table = "jamjar";
				String[] column = {"title","tb_url", "date_created"};
				String sql = selectSql(table, column);
				ResultSet rs = stmt.executeQuery(sql);
				JSONArray json_arr = new JSONArray();
				while (rs.next()){
					json_arr.put(columnToJsonObj(rs, column));
				}
				request.setAttribute("DBobj", json_arr);
				RequestDispatcher dispatcher = request.getRequestDispatcher("dbshow.jsp");
				dispatcher.forward(request, response);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	String selectSql(String table, String[] column){
		String front = "select ";
		String center = "";
		String rear = " from " + table + ";";
		for (int i=0; i<column.length ;i++){
			if(i == column.length-1){
				center += column[i];
			} else {
				center += column[i] + ", ";
			}
		}
		String sql = front + center + rear;
		System.out.println(sql);
		return sql;
	}
	
	JSONObject columnToJsonObj(ResultSet rs, String[] column){
		JSONObject obj = new JSONObject();
		for (int i=0; i<column.length; i++){
			try {
				String value = rs.getString(column[i]);
				obj.put(column[i], value);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return obj;
	}
}

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

public class CreateJamjarController extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String object = request.getParameter("data");
		JSONObject jsonObj = new JSONObject(object);
	
		String user = jsonObj.getString("user");
		String title = jsonObj.getString("title");
		String description = jsonObj.getString("desc");
		String bgm = jsonObj.getString("background");
		String thumbnail = jsonObj.getString("thumbnail");
		JSONArray urls = jsonObj.getJSONArray("urls");
		
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
			// connection none
		} else {
			try {
				stmt = conn.createStatement();
				int userid = getUserId(stmt, user);
				insertInfoSql(stmt, userid, title, description, bgm, thumbnail);
				int jarid = getJarId(stmt, userid);
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}			
		}
		
	}
	void updateUserSql(Statement stmt, int userid, int jarid){
		String sql = "update jamjar set u_id=" + String.valueOf(userid) + " where j_id=" + String.valueOf(jarid) +";";
		System.out.println(sql);
		//update jamjar set u_id = (select u_id from user where username='tempuser') where j_id = '2';
		try {
			stmt.execute(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("update user id in jamjar");
	}

	
	int getUserId(Statement stmt, String user){
		int userid = 0;
		String q = "\"";
		String get_userid_sql = "select u_id from user where username=" + q + user + q + ";";
		System.out.println(get_userid_sql);
		try {
			ResultSet rs = stmt.executeQuery(get_userid_sql);
			while(rs.next()){
				userid = rs.getInt("u_id");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return userid;
	}
	
	int getJarId(Statement stmt, int userid){
		int jarid = 0;
		String get_jarid_sql = "select j_id from jamjar where u_id=" + String.valueOf(userid) + " order by date_created desc limit 1;";
		System.out.println("get jarid sql : " + get_jarid_sql);
		try {
			ResultSet rs = stmt.executeQuery(get_jarid_sql);
			while(rs.next()){
				jarid = rs.getInt("j_id");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return jarid;
	}
	
	void insertInfoSql(Statement stmt, int userid, String title, String description, String bgm, String thumbnail){
		String q = "\"";
		String sql = "insert into jamjar (u_id, title, description, bgm_url, tb_url) values ("
					+ String.valueOf(userid) +"," 
					+ q + title + q + ", " 
					+ q + description + q + ", " 
					+ q + bgm + q + ", " 
					+ q + thumbnail + q 
					+ ");";
		System.out.println(sql);
		try {
			stmt.execute(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
		
	String selectSql(String table, String column){
		return "select " + column + " from " + table;
	}
	
	JSONObject columnToJsonObj(ResultSet rs, String column) throws JSONException, SQLException{
		JSONObject obj = new JSONObject();
		System.out.println(rs.getString(column));
		obj.put(column, rs.getString(column));
		return obj;
	}

}

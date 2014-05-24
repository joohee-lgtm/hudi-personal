package net.collagejam.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import com.mysql.jdbc.PreparedStatement;

public class CreateController extends HttpServlet {
	
	JSONObject userData = new JSONObject();
	int jamjarId = 0;
	int uid = 0;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String obj = request.getParameter("data");
		
		PrintWriter out = response.getWriter();
		

		HttpSession session = request.getSession();
		JSONObject jsonObj = new JSONObject(obj);
		userData = jsonObj;
		
		String username = (String) session.getAttribute("username");
		userData.put("username", username);

		out.println(userData);
		
		try {
			sendToDatabase();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	private void sendToDatabase() throws ClassNotFoundException, SQLException {
		Connection conn = null;
		Statement stmt = null;
		PreparedStatement pstmt = null;
		
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
		
		if(conn != null) {
			stmt = conn.createStatement();
			String username = userData.getString("username");
			int uid = getUserId(stmt, username);
			int thumbnail_idx = getThumbnailIdx();
			JSONArray aURL = userData.getJSONArray("aURL");
			String tb_url = aURL.getString(thumbnail_idx);
			
			userData.put("uid", uid);
			userData.put("tb_url", tb_url);
			
			insertIntoJamjar(stmt);
			insertIntoPhotoList(stmt);
		}
	}
	
	private void insertIntoJamjar(Statement stmt) {
		String qmark = "\"";
		int uid = getUid();
		String tb_url = getTbUrl();
		String title = getTitle();
		String desc = getDesc();
		String bgm = getBgm();
		
		String sql = "insert into jamjar (u_id, title, description, bgm_url, tb_url) values ("
				+  uid + "," 
				+ qmark + title + qmark + "," 
				+ qmark + desc + qmark + ","
				+ qmark + bgm + qmark + ","
				+ qmark + tb_url + qmark
				+ ");";
		System.out.println(sql);
		//setUid(uid);
		
		try {
			stmt.execute(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	private void insertIntoPhotoList(Statement stmt) {
		int j_id = 0;
		String query = "";
		try {
			j_id = getJamjarId(stmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		userData.put("jid", j_id);
		int len = userData.getJSONArray("aURL").length();
		
		
		for(int i = 0; i <len; i ++) {
			query = makeQueryForPhotoInsert(i);
			try {
				stmt.executeUpdate(query);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	private String makeQueryForPhotoInsert(int index) {
		
		String qmark = "\"";
		int photo_order = index + 1;
		String sql = "insert into photo_list values ("
					+ userData.getInt("jid") + ","
					+ photo_order + ",";
		JSONArray jarr = userData.getJSONArray("aURL");
		
		sql = sql + qmark + jarr.getString(index) + qmark + ");";
		System.out.println(sql);
		return sql;
	}
		


	private int getJamjarId(Statement stmt) throws SQLException {
		String sql = "select LAST_INSERT_ID();";
		ResultSet rs = stmt.executeQuery(sql);
		int last_insert = 0;
		
		while (rs.next()){
			last_insert = rs.getInt(1);
		}
		System.out.println("last_jid: " + last_insert);
		return last_insert;
	}


	
	private String getBgm() {
		return userData.getString("bgm");
	}

	private String getDesc() {
		return userData.getString("desc");
	}

	private String getTitle() {
		return userData.getString("title");
	}

	private String getTbUrl() {
		return userData.getString("tb_url");
	}

	private int getUid() {
		return userData.getInt("uid");
	}

	private int getThumbnailIdx() {
		return 0;
	}

	private int getUserId(Statement stmt, String user){
		int userid = 0;
		String q = "\"";
		String get_userid_sql = "select u_id from user where username=" + q + user + q + ";";
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
}

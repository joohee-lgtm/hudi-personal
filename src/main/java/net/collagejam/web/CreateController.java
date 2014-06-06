package net.collagejam.web;

import java.io.IOException;
import java.io.PrintWriter;
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
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import com.mysql.jdbc.PreparedStatement;

public class CreateController extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("create.jsp");
		dispatcher.forward(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
//		int jamjarId = 0;
//		int uid = 0;
		
		JSONObject userData = new JSONObject(request.getParameter("data"));
	
		String username = (String) session.getAttribute("username");
		userData.put("username", username);
		
		try {
			sendToDatabase(userData);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		// db 불러오기
		out.println("{ \"jid\": 10 }");
		
	}

	private void sendToDatabase(JSONObject userData) throws ClassNotFoundException, SQLException {
		Connection conn = null;
		Statement stmt = null;
//		PreparedStatement pstmt = null;
		
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
		
		if(conn != null) {
			stmt = conn.createStatement();
			String username = userData.getString("username");
			int uid = getUserId(stmt, username);
			int thumbnail_idx = 0;
			JSONArray aURL = userData.getJSONArray("aURL");
			String tb_url = aURL.getString(thumbnail_idx);
			
			userData.put("uid", uid);
			userData.put("tb_url", tb_url);
			
			insertIntoJamjar(stmt, userData);
			insertIntoPhotoList(stmt, userData);
		}
	}
	
	private void insertIntoJamjar(Statement stmt, JSONObject userData) {
		String qmark = "\"";
		int uid = userData.getInt("uid");
		String tb_url = userData.getString("tb_url");
		String title = userData.getString("title");
		String desc = userData.getString("desc");
		String bgm = userData.getString("bgm");
		
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
	
	private void insertIntoPhotoList(Statement stmt, JSONObject userData) {
		int j_id = 0;
		String query = "";
		try {
			j_id = getJamjarId(stmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		JSONArray jarr = userData.getJSONArray("aURL");
		for(int i = 0; i <jarr.length(); i ++) {
			String url = jarr.getString(i);
			query = makeQueryForPhotoInsert(i, j_id, url);
			try {
				stmt.executeUpdate(query);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	private String makeQueryForPhotoInsert(int index, int j_id, String url) {
		
		String qmark = "\"";
		int photo_order = index + 1;
		String sql = "insert into photo_list values ("
					+ j_id + ","
					+ photo_order + ","
					+ qmark + url + qmark
					+ ");";
//		JSONArray jarr = userData.getJSONArray("aURL");
//		sql = sql + qmark + jarr.getString(index) + qmark + ");";
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

package net.collagejam.web;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import net.collagejam.user.DBSetting;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class CreateJarController {
	JSONObject jar_obj;
	int jarid;
	String sessionId;

	public CreateJarController(String data, String sessionId) {
		this.jar_obj = new JSONObject(data);
		this.sessionId = sessionId;
	}
	
	public void saveData(){
		
//		String user 		= jar_obj.getString("user");
		String user 		= sessionId;
		String title 		= jar_obj.getString("title");
		String description 	= jar_obj.getString("desc");
		String bgm 			= jar_obj.getString("bgm");
		String thumbnail 	= jar_obj.getString("thumbnail");
		JSONArray urls 		= jar_obj.getJSONArray("aURL");
		String bgmStart		= jar_obj.getString("bgmStart");
		String bgmEnd 		= jar_obj.getString("bgmEnd");
		String spi			= jar_obj.getString("secPerImg");
		
		DBSetting dbc = new DBSetting();
		dbc.setJDBC();
		Statement stmt = dbc.getStatement();
		
		try {
				int userid = getUserId(stmt, user);
				insertInfoSql(stmt, userid, title, description, bgm, thumbnail, bgmStart, bgmEnd, spi);
				getJamjarId(stmt);
//				searchJarId(stmt, userid);
				insertImgsSql(stmt, jarid, urls);
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
		}
	}
	
	public int getJarId(){
		return this.jarid;
	}
	
	void insertImgsSql(Statement stmt, int jarid, JSONArray urls){
		String sql_front = "insert into photo_list (j_id, photo_order, photo_url) values (";
		String q = "\"";
		for (int i=0; i < urls.length(); i++){
			String values = jarid + "," + i + "," + q + urls.getString(i) +q; 
			String sql = sql_front + values + ");";
			System.out.println(sql);
			try {
				stmt.execute(sql);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	
	void insertInfoSql(Statement stmt, int userid, String title, String description, String bgm, String thumbnail, String bgmStart, String bgmEnd, String spi){
		String q = "\"";
		String sql = "insert into jamjar (u_id, title, description, bgm_url, tb_url, bgm_start, bgm_end, sec_per_img) values ("
					+ String.valueOf(userid) +"," 
					+ q + title 		+ q + ", " 
					+ q + description 	+ q + ", " 
					+ q + bgm 			+ q + ", " 
					+ q + thumbnail 	+ q + ", "
					+ q + bgmStart 		+ q + ", "
					+ q + bgmEnd 		+ q + ", "
					+ q + spi 			+ q 
					+ ");";
		
		
		System.out.println(sql);
		try {
			stmt.execute(sql);
		} catch (SQLException e) {
			e.printStackTrace();
		}
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


	void searchJarId(Statement stmt, int userid){
		int jarid = 0;
		String get_jarid_sql = "select j_id from jamjar where u_id=" + String.valueOf(userid) + " order by date_created desc limit 1;";
		System.out.println("search jarid sql : " + get_jarid_sql);
		try {
			ResultSet rs = stmt.executeQuery(get_jarid_sql);
			while(rs.next()){
				jarid = rs.getInt("j_id");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		this.jarid = jarid;
//		return jarid;
	}
	
	private void getJamjarId(Statement stmt) throws SQLException {
		String sql = "select LAST_INSERT_ID();";
		ResultSet rs = stmt.executeQuery(sql);
		int last_insert = 0;
		
		while (rs.next()){
			last_insert = rs.getInt(1);
		}
		System.out.println("last_jid: " + last_insert);
		this.jarid = last_insert;
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

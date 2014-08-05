package net.collagejam.web;

import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONObject;

import com.DURU.support.ConnectionManager;

public class LikeAddController {
	JSONObject like_obj;
	
	public LikeAddController(String data) {
		this.like_obj = new JSONObject(data);
	}

	public void updateDB() {
		ConnectionManager dbc = new ConnectionManager();
		dbc.setJDBC();
		Statement stmt = dbc.getStatement();		
		String sql = updateLikeSQL();
		try {
			stmt.execute(sql);
			System.out.println("add like success");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	String updateLikeSQL(){
		//update jamjar set likes='10' where j_id = '300';
		String sql;
		int like = like_obj.getInt("like");
		int jid = like_obj.getInt("jid");
		sql = "update jamjar set likes=" 
				+ "\"" + like + "\""
				+ "where j_id = " 
				+ "\"" + jid + "\"";
		return sql;
	}

}

package net.collagejam.web;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import net.collagejam.model.DBSetting;

import org.json.JSONArray;
import org.json.JSONObject;

public class MainFeaturedController {
	public JSONArray rows;
	
	public MainFeaturedController(){}
	
	public void makeShowVideoList(){
		String table = "jamjar";
		String[] column = {"title", "tb_url", "date_created", "j_id", "u_id"};
		String sql = selectColumnSql(table, column);
		JSONArray rows = new JSONArray();
		
		DBSetting dbc = new DBSetting();
		dbc.setJDBC();
		Statement stmt = dbc.getStatement();
		
		try {
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()){
				JSONObject one_row = rowRemakeJSONObj(rs, column);
				rows.put(one_row);
				setRows(rows);
			}
			dbc.closeConnection();
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
	}
	
	String selectColumnSql(String table, String[] column){
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
		return sql;
	}
	
	JSONObject rowRemakeJSONObj(ResultSet rs, String[] column){
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
	
	public void setRows(JSONArray rows){
		this.rows = rows;
	}
	
	public JSONArray getRows(){
		return this.rows;
	}
	
}

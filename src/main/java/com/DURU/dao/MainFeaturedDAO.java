package com.DURU.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

import com.DURU.support.ConnectionManager;

public class MainFeaturedDAO {
	
	public MainFeaturedDAO(){}
	
	public JSONArray makeShowVideoList(){
		String table = "jamjar";
		String[] column = {"title", "tb_url", "date_created", "j_id", "u_id"};
		String sql = selectColumnSql(table, column);
		JSONArray rows = new JSONArray();
		
		ConnectionManager dbc = new ConnectionManager();
		dbc.setJDBC();
		Statement stmt = dbc.getStatement();
		
		try {
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()){
				JSONObject one_row = rowRemakeJSONObj(rs, column);
				rows.put(one_row);
			}
			dbc.closeConnection();
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
		return rows;
	}
	
	public JSONArray getTopLikedSlides() {
		String table = "jamjar";
		String[] column = {"title", "tb_url", "date_created", "j_id", "u_id", "likes"};
		int limit = 6;
		String sql = getTopLikedJarsSql(table, column, limit);
		JSONArray rows = new JSONArray();
		ConnectionManager dbc = new ConnectionManager();
		dbc.setJDBC();
		Statement stmt = dbc.getStatement();
		
		try {
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next()){
				JSONObject one_row = rowRemakeJSONObj(rs, column);
				rows.put(one_row);
			}
			dbc.closeConnection();
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
		
		return rows;
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
	
	String getTopLikedJarsSql(String table, String[] column, int limit){
		String front = "select ";
		String center = "";
		String rear = " from " + table;
		for (int i=0; i<column.length ;i++){
			if(i == column.length-1){
				center += column[i];
			} else {
				center += column[i] + ", ";
			}
		}
		String option = " order by likes desc limit " + limit;
		String sql = front + center + rear + option + ";";
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
}

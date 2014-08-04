package net.collagejam.user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DBSetting {
	Connection conn;
	Statement stmt;

	public void setJDBC(){
		String addr = "jdbc:mysql://10.73.45.132:3306/collageJam";
		String user = "admin";
		String pw = "leonard911";
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		setConnection(addr, user, pw);
		setStatement(conn);
	}
	
	public Connection getConnection(){
		return this.conn;
	}
	
	public void setConnection(String addr, String user, String pw){
		try {
			this.conn = DriverManager.getConnection(addr, user, pw);
		} catch (SQLException e) {
			e.printStackTrace();
		}		
	}
	
	public Statement getStatement(){
		return this.stmt;
	}
	
	public void setStatement(Connection conn){
		try {
			this.stmt = conn.createStatement();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void closeConnection(){
		try {
			this.conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}

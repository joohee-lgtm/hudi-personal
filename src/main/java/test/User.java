package test;

import java.sql.*;

public class User {
	private String url = "jdbc:mysql://10.73.45.132/test";
	private String user = "root";
	private String pw = "leonard911";
	private Connection con;
	
	public Connection connect(){
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			System.err.println("Driver Error " + e.getMessage());
		}
		System.out.println("Driver Loading success");
		Connection con = null;
		
		try {
			con = DriverManager.getConnection(url, user, pw);
		} catch (SQLException e) {
			System.err.println("Connection Failed: " + e.getMessage());
			return null;
		}
		System.out.println("Connection Success");
		return con;
	}
	
	public void close(Connection c) {
		try {
			con.close();
		} catch (SQLException e) {
			//do nothing
		}
	}
}

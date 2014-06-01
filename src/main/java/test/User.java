package test;


import java.sql.*;

public class User {
	private String url = "jdbc:mysql://localhost/collagejam";
	private String user = "root";
	private String pw = "db0000";
	private Connection con;
	
	public Connection connect(){
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(url, user, pw);
		} catch (ClassNotFoundException e) {
			System.err.println("Driver Error " + e.getMessage());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		System.out.println("Driver Loading success");
//		Connection con = null;
//		
//		try {
//			con = DriverManager.getConnection(url, user, pw);
//		} catch (SQLException e) {
//			System.err.println("Connection Failed: " + e.getMessage());
//			return null;
//		}
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

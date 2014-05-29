package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RawJdbcUserDao {
	private Connection conn;
	
	public RawJdbcUserDao (Connection conn) {
		this.conn = conn;
	}
	
	public void insert(User user) throws SQLException {
		String query = "insert into user (email, username, passwd) values (?, ?, ?)";
		PreparedStatement pstmt = conn.prepareStatement(query);
		pstmt.setString(1, user.getEmail());
		pstmt.setString(2, user.getUsername());
		pstmt.setString(3, user.getPassword());
		
		pstmt.executeUpdate();
	}
	
	public void update(User user) {
		//String query = "update user set name=?, email=? where u_id"
	}
	
	public User selectByUsername(String username) throws SQLException {
		String query = "select * from user where username=?";
		PreparedStatement pstmt = conn.prepareStatement(query);
		pstmt.setString(1, username);
		
		ResultSet rs = pstmt.executeQuery();
		User user = null;
		if(rs.next()) {
			user = new User(rs.getInt("u_id"), rs.getString("email"), rs.getString("username"), rs.getString("passwd"));
		}
		return user;
	}
}

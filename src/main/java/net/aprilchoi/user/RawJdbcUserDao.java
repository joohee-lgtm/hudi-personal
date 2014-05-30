package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RawJdbcUserDao {
	private Connection conn;
	
	public RawJdbcUserDao(Connection conn) {
		this.conn = conn;
	}
	
	public void insert(User user) throws SQLException {
		UpdateJdbcTemplate template = new UpdateJdbcTemplate(conn) {
			
			@Override
			void setValues(User user, PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, user.getEmail());
				pstmt.setString(2, user.getUsername());
				pstmt.setString(3, user.getPassword());
			}
			
		};
		String query = "insert into user (email, username, passwd) values (?, ?, ?)";
	    template.update(query, user);
	}
	
	public void update(User user) throws SQLException {
		UpdateJdbcTemplate template = new UpdateJdbcTemplate(conn) {

			@Override
			void setValues(User user, PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, user.getEmail());
				pstmt.setString(2, user.getUsername());
				pstmt.setInt(3, user.getUserId());
			}
			
		};
		String query = "update user set email=?, username=? where u_id=?";
		template.update(query, user);
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

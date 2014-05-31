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
	
	public void insert(final User user) throws SQLException {
		UpdateJdbcTemplate template = new UpdateJdbcTemplate(conn) {
			
			@Override
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, user.getEmail());
				pstmt.setString(2, user.getUsername());
				pstmt.setString(3, user.getPassword());
			}
			
		};
		String query = "insert into user (email, username, passwd) values (?, ?, ?)";
	    template.update(query);
	}
	
	public void update(final User user) throws SQLException {
		UpdateJdbcTemplate template = new UpdateJdbcTemplate(conn) {

			@Override
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, user.getEmail());
				pstmt.setString(2, user.getUsername());
				pstmt.setInt(3, user.getUserId());
			}
			
		};
		String query = "update user set email=?, username=? where u_id=?";
		template.update(query);
	}
	
	public User selectByUsername(final String username) throws SQLException {
		SelectJdbcTemplate template = new SelectJdbcTemplate(conn) {

			@Override
			Object mapRow(ResultSet rs) throws SQLException {
				return new User(
						rs.getInt("u_id"),
						rs.getString("email"),
						rs.getString("username"),
						rs.getString("passwd"));
			}

			@Override
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, username);
			}
			
		};

		String query = "select * from user where username=?";
		return (User)template.selectByUsername(query);
	}
}

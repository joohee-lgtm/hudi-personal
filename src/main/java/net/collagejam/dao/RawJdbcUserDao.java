package net.collagejam.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.DURU.dao.JdbcTemplate;

import net.collagejam.model.User;

public class RawJdbcUserDao {
	
	public void insert(Connection conn, final User user) throws SQLException {
		UpdateJdbcTemplate template = new UpdateJdbcTemplate() {
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, user.getEmail());
				pstmt.setString(2, user.getUsername());
				pstmt.setString(3, user.getPassword());
			}
		};
		String query = "insert into user (email, username, passwd) values (?, ?, ?)";
	    template.update(conn, query);
	}
	
	public void update(Connection conn, final User user) throws SQLException {
		UpdateJdbcTemplate template = new UpdateJdbcTemplate() {
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, user.getEmail());
				pstmt.setString(2, user.getUsername());
				pstmt.setInt(3, user.getUserId());
			}
			
		};
		String query = "update user set email=?, username=? where u_id=?";
		template.update(conn, query);
	}
	
	public User selectByUsername(Connection conn, final String username) throws SQLException {
		JdbcTemplate template = new JdbcTemplate() {
			Object mapRow(ResultSet rs) throws SQLException {
				return new User(
						rs.getInt("u_id"),
						rs.getString("email"),
						rs.getString("username"),
						rs.getString("passwd"));
			}
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setString(1, username);
			}
			
		};

		String query = "select * from user where username=?";
		return (User)template.selectByUsername(conn, query);
	}
}

package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public abstract class UpdateJdbcTemplate {
	private Connection conn;
	
	public UpdateJdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void update(String query, User user) throws SQLException {
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(user, pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract void setValues(User user, PreparedStatement pstmt) throws SQLException;
}

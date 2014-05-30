package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public abstract class UpdateJdbcTemplate {
	private Connection conn;
	
	public UpdateJdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void update(User user, RawJdbcUserDao userDao) throws SQLException {
		String query = createQuery();
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(user, pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract String createQuery();
	abstract void setValues(User user, PreparedStatement pstmt) throws SQLException;
}

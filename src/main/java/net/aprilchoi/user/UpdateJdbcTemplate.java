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
		String query = createQueryForUpdate();
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValuesForUpdate(user, pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract String createQueryForUpdate();
	abstract void setValuesForUpdate(User user, PreparedStatement pstmt) throws SQLException;
}

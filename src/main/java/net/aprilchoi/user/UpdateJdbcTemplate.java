package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UpdateJdbcTemplate {
	private Connection conn;
	
	public UpdateJdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void update(User user, RawJdbcUserDao userDao) throws SQLException {
		String query = userDao.createQueryForUpdate();
		PreparedStatement pstmt = conn.prepareStatement(query);
		userDao.setValuesForUpdate(user, pstmt);
		
		pstmt.executeUpdate();
	}
}

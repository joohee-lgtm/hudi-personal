package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InsertJdbcTemplate {
	private Connection conn;
	
	public InsertJdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void insert(User user, RawJdbcUserDao userDao) throws SQLException {
		String query = userDao.createQueryForInsert();
		PreparedStatement pstmt = conn.prepareStatement(query);
		userDao.setValuesForInsert(user, pstmt);
		
		pstmt.executeUpdate();
	}
}

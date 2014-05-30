package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public abstract class InsertJdbcTemplate {
	private Connection conn;
	
	public InsertJdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void insert(User user) throws SQLException {
		String query = createQuery();
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(user, pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract String createQuery();
	abstract void setValues(User user, PreparedStatement pstmt) throws SQLException;
}

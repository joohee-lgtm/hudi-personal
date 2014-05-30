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
		String query = createQueryForInsert();
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValuesForInsert(user, pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract String createQueryForInsert();
	abstract void setValuesForInsert(User user, PreparedStatement pstmt) throws SQLException;
}

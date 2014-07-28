package net.collagejam.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public abstract class UpdateJdbcTemplate {
	private Connection conn;
	
	public UpdateJdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void update(String query) throws SQLException {
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract void setValues(PreparedStatement pstmt) throws SQLException;
}

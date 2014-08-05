package com.DURU.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public abstract class UpdateJdbcTemplate {
	public void update(Connection conn, String query) throws SQLException {
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(pstmt);
		
		pstmt.executeUpdate();
	}
	
	abstract void setValues(PreparedStatement pstmt) throws SQLException;
}
package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public abstract class JdbcTemplate {
	private Connection conn;
	
	public JdbcTemplate(Connection conn) {
		this.conn = conn;
	}
	
	public void update(String query) throws SQLException {
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(pstmt);
		
		pstmt.executeUpdate();
	}
	
	public Object selectByUsername(String query) throws SQLException {
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(pstmt);
		
		ResultSet rs = pstmt.executeQuery();
		if(rs.next()) {
			return mapRow(rs);
		}
		return null;
	}
	
	public Object selectByJarId(String query) throws SQLException {
		PreparedStatement pstmt = conn.prepareStatement(query);
		setValues(pstmt);
		ResultSet rs = pstmt.executeQuery();
		if(rs.next()) {
			return mapRow(rs);
		}
		return null;
	}
	
	abstract Object mapRow(ResultSet rs) throws SQLException;

	abstract void setValues(PreparedStatement pstmt) throws SQLException;
	
}

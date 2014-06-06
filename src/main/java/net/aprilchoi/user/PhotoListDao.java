package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PhotoListDao {
	private Connection conn;
	
	public void selectByJarId(int jid) {
		JdbcTemplate template = new JdbcTemplate(conn) {
			Object mapRow(ResultSet rs) throws SQLException {
				return rs.getInt(columnIndex);
			}
			void setValues(PreparedStatement pstmt) throws SQLException {
				
			}
			
		};
	}
}

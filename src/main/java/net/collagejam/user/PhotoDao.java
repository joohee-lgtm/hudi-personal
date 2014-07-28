package net.collagejam.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import net.collagejam.obj.Photo;

public class PhotoDao {
	private Connection conn;
	
	public PhotoDao(Connection conn) {
		this.conn = conn;
	}

	public ArrayList<String> selectListOfPhotosByJarId(final int jid) throws SQLException {
		JdbcTemplate template = new JdbcTemplate(conn) {
			String mapRow(ResultSet rs) throws SQLException {
				return rs.getString("photo_url");
			}
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setInt(1, jid);
			}
		};
		String query = "select * from photo_list where j_id=?";
		
		return template.selectListOfPhotosByJarId(query);
	}
}

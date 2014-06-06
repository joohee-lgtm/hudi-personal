package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.collagejam.obj.Photo;

public class PhotoDao {
	private Connection conn;
	
	public Photo selectByJarId(final int jid) throws SQLException {
		JdbcTemplate template = new JdbcTemplate(conn) {
			Photo mapRow(ResultSet rs) throws SQLException {
				return new Photo(
						rs.getInt("j_id"),
						rs.getInt("photo_order"),
						rs.getString("photo_url")
						);
			}
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setInt(1, jid);
			}
		};
		String query = "select * from photo_list where j_id=?";
		
		return (Photo)template.selectByJarIdPhotoList(query);
	}
}

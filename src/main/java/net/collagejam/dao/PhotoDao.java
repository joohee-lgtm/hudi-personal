package net.collagejam.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.DURU.dao.JdbcTemplate;

import net.collagejam.obj.Photo;

public class PhotoDao {

	public ArrayList<String> selectListOfPhotosByJarId(Connection conn, final int jid) throws SQLException {
		JdbcTemplate template = new JdbcTemplate() {
			String mapRow(ResultSet rs) throws SQLException {
				return rs.getString("photo_url");
			}
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setInt(1, jid);
			}
		};
		String query = "select * from photo_list where j_id=?";
		
		return template.selectListOfPhotosByJarId(conn, query);
	}
}

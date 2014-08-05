package com.DURU.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import net.collagejam.user.DBSetting;

import com.DURU.model.Photo;

public class PhotoDao {

	public ArrayList<String> selectListOfPhotosByJarId(final int jid) throws SQLException {
		DBSetting dbc = new DBSetting();
		dbc.setJDBC();
		Connection conn = dbc.getConnection();

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

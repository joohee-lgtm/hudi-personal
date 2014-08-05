package com.DURU.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import net.collagejam.obj.JamJar;
import net.collagejam.user.DBSetting;
import com.google.gson.Gson;

public class ResultDAO {

	public String getMedia(int id) {
		DBSetting dbc = new DBSetting();
		dbc.setJDBC();
		Connection conn = dbc.getConnection();

		JamJar selected = null;
		ArrayList<String> aUrl = null;
		Gson gson = new Gson();

		try {
			selected = selectByJarId(conn, id);
		} catch (SQLException e) {
			e.printStackTrace();
		}

		try {
			aUrl = selectListOfPhotosByJarId(conn, id);
		} catch (SQLException e) {
			// TODO Auto-generated cat ch block
			e.printStackTrace();
		}

		selected.setPhotolist(aUrl);
		String media = gson.toJson(selected);

		return media;
	}

	private JamJar selectByJarId(Connection conn, final int jid)
			throws SQLException {
		JdbcTemplate template = new JdbcTemplate() {

			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setInt(1, jid);
			}

			Object mapRow(ResultSet rs) throws SQLException {
				return new JamJar(rs.getInt("j_id"), rs.getInt("u_id"),
						rs.getTimestamp("date_created"),
						rs.getString("tb_url"), rs.getString("title"),
						rs.getString("description"), rs.getString("bgm_url"),
						rs.getInt("views"), rs.getInt("likes"),
						rs.getInt("sec_per_img"), rs.getString("bgm_start"),
						rs.getString("bgm_end"));
			}
		};
		String query = "select * from jamjar where j_id=?";
		return (JamJar) template.selectByJarId(conn, query);
	}

	private ArrayList<String> selectListOfPhotosByJarId(Connection conn,
			final int jid) throws SQLException {
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

package net.collagejam.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.DURU.dao.JdbcTemplate;

import net.collagejam.obj.JamJar;

public class JamjarDao {
	
	public JamJar selectByJarId(Connection conn, final int jid) throws SQLException {
		JdbcTemplate template = new JdbcTemplate() {
			
			void setValues(PreparedStatement pstmt) throws SQLException {
				pstmt.setInt(1, jid);
			}
			
			Object mapRow(ResultSet rs) throws SQLException {
				return new JamJar(
						rs.getInt("j_id"),
						rs.getInt("u_id"),
						rs.getTimestamp("date_created"),
						rs.getString("tb_url"),
						rs.getString("title"),
						rs.getString("description"),
						rs.getString("bgm_url"),
						rs.getInt("views"),
						rs.getInt("likes"),
						rs.getInt("sec_per_img"),
						rs.getString("bgm_start"),
						rs.getString("bgm_end")
						);
			}
		};
		String query = "select * from jamjar where j_id=?";
		return (JamJar)template.selectByJarId(conn, query);
	}
}

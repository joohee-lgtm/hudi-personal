package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.collagejam.obj.JamJar;

public class JamjarDao {
	private Connection conn;
	
	public JamjarDao(Connection conn) {
		this.conn = conn;
	}
	
	public JamJar selectByJarId(final int jid) throws SQLException {
		JdbcTemplate template = new JdbcTemplate(conn) {
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
						rs.getInt("likes")
						);
			}
		};
		String query = "select * from jamjar where j_id=?";
		return (JamJar)template.selectByJarId(query);
	}
}

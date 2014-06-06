package net.aprilchoi.user;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import net.collagejam.obj.Photo;

public class PhotoListDao {
	private Connection conn;
	private PhotoDao pdao;
	
	public ArrayList<String> getUrlList(int jid) throws SQLException {
		ArrayList<String> aUrl = new ArrayList<String>();
		Photo selected = null;
		pdao = new PhotoDao(conn);
		selected = pdao.selectByJarId(jid);
		aUrl.add(selected.getUrl());
		return aUrl;
	}
}

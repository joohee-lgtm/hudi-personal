package net.collagejam.obj;

import java.sql.Timestamp;

public class JamJar {
	private int j_id;
	private int u_id;
	private Timestamp date_created;
	private String tb_url;
	private String title;
	private String description;
	private String bgm_url;
	private int views;
	private int likes;



	public JamJar(int j_id, int u_id, Timestamp date_created, String tb_url,
			String title, String description, String bgm_url, int views, int likes) {
		this.j_id 			= j_id;
		this.u_id 			= u_id;
		this.date_created 	= date_created;
		this.tb_url			= tb_url;
		this.title			= title;
		this.description	= description;
		this.bgm_url		= bgm_url;
		this.views			= views;
		this.likes			= likes;
	}

	@Override
	public String toString() {
		return "JamJar [j_id=" + j_id + ", u_id=" + u_id + ", date_created="
				+ date_created + ", tb_url=" + tb_url + ", title=" + title
				+ ", description=" + description + ", bgm_url=" + bgm_url
				+ ", views=" + views + ", likes=" + likes + "]";
	}
}
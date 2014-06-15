package net.collagejam.obj;

import java.sql.Timestamp;
import java.util.ArrayList;

import org.json.JSONArray;

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
	private int sec_per_img;
	private String bgm_start;
	private String bgm_end;
	private ArrayList<String> photolist;
	
	
	public JamJar(int j_id, int u_id, Timestamp date_created, 
			String tb_url, String title, String description, 
			String bgm_url, int views, int likes, int sec_per_img, String bgm_start, String bgm_end) {
		this.j_id 			= j_id;
		this.u_id 			= u_id;
		this.date_created 	= date_created;
		this.tb_url			= tb_url;
		this.title			= title;
		this.description	= description;
		this.bgm_url		= bgm_url;
		this.views			= views;
		this.likes			= likes;
		this.sec_per_img	= sec_per_img;
		this.bgm_start 		= bgm_start;
		this.bgm_end		= bgm_end;
	}
	
	@Override
	public String toString() {
		return "JamJar [j_id=" + j_id + ", u_id=" + u_id + ", date_created="
				+ date_created + ", tb_url=" + tb_url + ", title=" + title
				+ ", description=" + description + ", bgm_url=" + bgm_url
				+ ", views=" + views + ", likes=" + likes +  ", bgm_start=" + bgm_start + ", bgm_end=" + bgm_end+ "]";
	}

	public void setPhotolist(ArrayList<String> aUrl) {
		this.photolist	= aUrl;
	}
}

package com.DURU.model;

public class Photo {
	private int j_id;
	private int index;
	private String url;

	public Photo(int j_id, int index, String url) {
		this.j_id	= j_id;
		this.index 	= index;
		this.url	= url;
	}
	
	public String getUrl() {
		return url;
	}

	@Override
	public String toString() {
		return "Photo [j_id=" + j_id + ", index=" + index + ", url=" + url
				+ "]";
	}
}

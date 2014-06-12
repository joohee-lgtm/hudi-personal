package net.collagejam.web;

import org.json.JSONObject;

public class SearchJarController {
	int jid;
	JSONObject jar_obj;
	
	public SearchJarController(int jid){
		this.jid = jid;
	}

	public void getSearchedJar() {
		
	}

	public JSONObject getJarObj() {
		return this.jar_obj;
	}
}
package net.collagejam.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class CreateController extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String obj = request.getParameter("data");
		
		PrintWriter out = response.getWriter();
		out.println(obj);
		
		JSONObject jsonObj = new JSONObject(obj);
		String title = jsonObj.getString("title");
		String desc = jsonObj.getString("desc");
		String bgm = jsonObj.getString("bgm");
		JSONArray urls = jsonObj.getJSONArray("aURL");
	}

}

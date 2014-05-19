package test;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

public class JavascriptServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		System.out.println("connection");
		String object = request.getParameter("data");
		JSONObject jsonObj = new JSONObject(object);
		JSONArray url = jsonObj.getJSONArray("urls");
		System.out.println(url.get(1));
		}
}

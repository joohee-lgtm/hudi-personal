package net.collagejam.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

public class CreateController extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String obj = request.getParameter("data");
		
		PrintWriter out = response.getWriter();
		

		HttpSession session = request.getSession();
		JSONObject jsonObj = new JSONObject(obj);
		String username = (String) session.getAttribute("username");
		jsonObj.put("username", username);

		out.println(jsonObj);
		session.setAttribute("data", jsonObj);
	}
}

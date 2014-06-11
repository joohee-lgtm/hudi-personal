package net.collagejam.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.aprilchoi.user.JamjarDao;
import net.aprilchoi.user.PhotoDao;
import net.collagejam.obj.JamJar;

import org.json.JSONArray;

import com.google.gson.Gson;

public class MobileResultPageServlet extends HttpServlet{
	private JamjarDao jdao;
	private PhotoDao pdao;
	
	private Connection getConnection() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		int jid = Integer.parseInt(request.getParameter("id"));

		Connection conn = null;
		JamJar selected = null;
		ArrayList<String> aUrl = null;
		Gson gson = new Gson();
		
		try {
			conn = getConnection();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		jdao	= new JamjarDao(conn);
		pdao	= new PhotoDao(conn);
		
		try {
			selected = jdao.selectByJarId(jid);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		try {
			aUrl = pdao.selectListOfPhotosByJarId(jid);
		} catch (SQLException e) {
			// TODO Auto-generated cat ch block
			e.printStackTrace();
		}
		selected.setPhotolist(aUrl);
		String jarJson = gson.toJson(selected);
		request.setAttribute("jamjar", jarJson);

		response.setContentType("text/html; charset=euc-kr");
		RequestDispatcher dispatcher = request.getRequestDispatcher("/m/result.jsp");
		dispatcher.forward(request, response);
	}

	private JSONArray getJsonArray(ArrayList<String> aUrl) {
		JSONArray arr 	= new JSONArray(aUrl);
		return arr;
	}
}

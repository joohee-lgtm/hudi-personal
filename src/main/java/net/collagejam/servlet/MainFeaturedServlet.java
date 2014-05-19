package net.collagejam.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.collagejam.model.DBSetting;
import net.collagejam.web.MainFeaturedController;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MainFeaturedServlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("servlet connection");
		
		MainFeaturedController mfc = new MainFeaturedController();
		mfc.makeShowVideoList();
		JSONArray rows = mfc.getRows();
		
		request.setAttribute("data", rows);
		RequestDispatcher dispatcher = request.getRequestDispatcher("main.jsp");
		dispatcher.forward(request, response);
	}
}

package com.DURU.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.DURU.dao.MainFeaturedDAO;

import core.mvc.Controller;

public class MainController implements Controller {

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		MainFeaturedDAO dao = new MainFeaturedDAO();
		
		JSONArray recentData = dao.makeShowVideoList();
		request.setAttribute("recentData", recentData);
		
		JSONArray topRankData = dao.getTopLikedSlides();
		request.setAttribute("topRankData", topRankData);
		
		return "main.jsp";
	}
}

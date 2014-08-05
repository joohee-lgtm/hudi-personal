package com.DURU.Controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import net.collagejam.web.MainFeaturedController;
import core.mvc.Controller;

public class MainController implements Controller {

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		MainFeaturedController mfc1 = new MainFeaturedController();
		mfc1.makeShowVideoList();
		JSONArray recentData = mfc1.getRows();
		
		MainFeaturedController mfc2 = new MainFeaturedController();
		mfc2.getTopLikedSlides();
		JSONArray topRankData = mfc2.getRows();		
		
		request.setAttribute("recentData", recentData);
		request.setAttribute("topRankData", topRankData);
		return "main.jsp";
	}
}

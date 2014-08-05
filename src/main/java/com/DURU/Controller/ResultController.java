package com.DURU.Controller;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.DURU.dao.JamjarDao;
import com.DURU.dao.PhotoDao;
import com.DURU.model.JamJar;
import com.google.gson.Gson;
import core.mvc.Controller;

public class ResultController implements Controller{

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		int id = Integer.parseInt(request.getParameter("id"));
		JamJar selected = null;
		ArrayList<String> aUrl = null;
		Gson gson = new Gson();
		
		JamjarDao jdao = new JamjarDao();
		PhotoDao pdao = new PhotoDao();
		selected = jdao.selectByJarId(id);
		aUrl = pdao.selectListOfPhotosByJarId(id);
		selected.setPhotolist(aUrl);
		String media = gson.toJson(selected);
		
		request.setAttribute("jamjar", media);
		response.setContentType("text/html; charset=euc-kr");
		return "result.jsp";
	}
}

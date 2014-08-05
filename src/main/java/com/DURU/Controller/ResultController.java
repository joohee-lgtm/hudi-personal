package com.DURU.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.DURU.dao.ResultDAO;

import core.mvc.Controller;

public class ResultController implements Controller{

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		int id = Integer.parseInt(request.getParameter("id"));
		ResultDAO dao = new ResultDAO();
		String media = dao.getMedia(id);
		
		request.setAttribute("jamjar", media);
		response.setContentType("text/html; charset=euc-kr");
		return "result.jsp";
	}
}

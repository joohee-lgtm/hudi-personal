package com.DURU.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.mvc.Controller;

public class ResultController implements Controller{

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		int jid = Integer.parseInt(request.getParameter("id"));
		return "result.jsp";
	}
}

package com.DURU.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import core.mvc.Controller;

public class MovePageController implements Controller{
	
	private String page;

	public MovePageController(String page) {
		this.page = page;
	}

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		return page;
	}

}

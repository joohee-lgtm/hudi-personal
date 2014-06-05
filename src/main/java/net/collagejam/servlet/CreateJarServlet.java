package net.collagejam.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.collagejam.web.CreateJarController;
import net.collagejam.web.SearchJarController;

import org.json.JSONArray;
import org.json.JSONObject;
import org.omg.CORBA.portable.ResponseHandler;

public class CreateJarServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		System.out.println("create jar servlet connection");
		String data = request.getParameter("data");
		CreateJarController cjc = new CreateJarController(data);
		cjc.saveData();
		SearchJarController sjc = new SearchJarController(cjc.getJarId());
		int jarid = cjc.getJarId();
		String url = "/collageJam/result?id="+jarid; 
        response.setContentType("text/plain;charset=euc-kr");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.addIntHeader("jid", jarid);
	}
}

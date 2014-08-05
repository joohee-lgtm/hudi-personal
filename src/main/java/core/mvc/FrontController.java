package core.mvc;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FrontController extends HttpServlet{
	private static final long serialVersionUID = 1L;
	private RequestMapping rm;
	
	@Override
	public void init() throws ServletException {
		rm = new RequestMapping();
		rm.initMapping();
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp){
		String originReqURI = req.getRequestURI();
		String editedReqURI = ridFrontURI(originReqURI); 
		System.out.println(editedReqURI);
		Controller controller = rm.findController(editedReqURI);
		try {
			String page = controller.execute(req, resp);
			RequestDispatcher rd = req.getRequestDispatcher(page);
			rd.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private String ridFrontURI(String origin){
		String front = "/collageJam";
		String edited = origin.replace(front, "");
		return edited;
	}
}

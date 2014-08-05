package core.mvc;

import java.util.HashMap;
import java.util.Map;

import com.DURU.Controller.*;

public class RequestMapping {
	private Map<String, Controller> mappings = new HashMap<String, Controller>();
	
	public void initMapping(){
		mappings.put("/main.next", new MainController());
		mappings.put("/createMedia.next", new CreateMediaController());
		mappings.put("/result.next", new ResultController());
		mappings.put("/likeAdd.next", new LikeAddController());
		mappings.put("/register.next", new RegisterUserController());
		//mappings.put("/login.next", new LoginController());
		//mappings.put("/logout.next", new LogoutController());
		
		mappings.put("/signup.next", new MovePageController("/signup.jsp"));
		mappings.put("/create.next", new MovePageController("/create.jsp"));
	}

	public Controller findController(String editedReqURI) {
		Controller ctr = mappings.get(editedReqURI);
		return ctr;
	}

}

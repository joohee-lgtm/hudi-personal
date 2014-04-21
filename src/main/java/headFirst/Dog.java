package headFirst;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

public class Dog implements HttpSessionBindingListener{
	private String breed;

	public Dog(String dogBreed) {
		this.breed = dogBreed;
	}

	public String getBreed() {
		return breed;
	}
	
	public void valueBound(HttpSessionBindingEvent event) {
		// 세션에 추가되었을 때 실행될 코드.
		
	}
	
	public void valueUnbound(HttpSessionBindingEvent event) {
		// 세션에서 제거되었을 때 실행될 코드.
	}
}


package headFirst;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class MyServletContextListener implements ServletContextListener {
	public void contextInitialized(ServletContextEvent sce) {
		// ServletContext 내놔 이벤트야.
		ServletContext sc = sce.getServletContext();
		
		// 컨텍스트에서 초기화 파라미터 읽음
		String dogBreed = sc.getInitParameter("breed");
		
		// Dog 객체 생성.
		Dog d = new Dog(dogBreed);
		
		// 컨텍스트 속성에 이름/객체 쌍으로 묶기. 다른 애플리케이션은 dog라는 이름으로 Dog 객체 참조 가능.
		sc.setAttribute("dog", d);
	}

	public void contextDestroyed(ServletContextEvent sce) {
		// Dog 객체 소멸 시 정리해야 할 자원은 없음.
	}
}



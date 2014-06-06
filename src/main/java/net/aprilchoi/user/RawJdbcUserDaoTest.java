package net.aprilchoi.user;

//import static org.junit.Assert.assertEquals;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import org.junit.Before;
//import org.junit.Test;

public class RawJdbcUserDaoTest {
//	private RawJdbcUserDao dut;
//	
//	@Before public void setup() throws Exception{
//		dut = new RawJdbcUserDao(getConnection());
//	}
//
//	private Connection getConnection() throws Exception {
//		Class.forName("com.mysql.jdbc.Driver");
//		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
//	}
//	
//	@Test public void crud() throws Exception {
//		String username = "test1";
//		String password = "1234";
//		User expected = new User("test@gmail.com", username, password);
//		
//		dut.insert(expected);
//		expected.setUserId(dut.selectByUsername(expected.getUsername()).getUserId());
//		User actual = dut.selectByUsername(expected.getUsername());
//		assertEquals(expected, actual);
//		
//		expected = new User("test@naver.com", "test2", password);
//		expected.setUserId(dut.selectByUsername(username).getUserId());
//		dut.update(expected);
//		actual = dut.selectByUsername(expected.getUsername());
//		assertEquals(expected, actual);
//	}
}
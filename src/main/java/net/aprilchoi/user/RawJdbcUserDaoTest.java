package net.aprilchoi.user;

import static org.junit.Assert.assertEquals;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Before;
import org.junit.Test;

public class RawJdbcUserDaoTest {
	private RawJdbcUserDao dut;
	
	@Before public void setup() throws Exception{
		dut = new RawJdbcUserDao(getConnection());
	}

	private Connection getConnection() throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		return DriverManager.getConnection("jdbc:mysql://10.73.45.132:3306/collageJam", "admin", "leonard911");
	}
	
	@Test public void crud() throws Exception {
		User expected = new User("abcdef4@gmail.com", "choiapril7", "123");
		
		dut.insert(expected);
		expected.setUserId(dut.selectByUsername(expected.getUsername()).getUserId());
		User actual = dut.selectByUsername(expected.getUsername());
		assertEquals(expected, actual);
		
		expected = new User("mmmg46@naver.com", "choiapril7", "1234");
		dut.update(expected);
		actual = dut.selectByUsername(expected.getUsername());
		assertEquals(expected, actual);
	}
}

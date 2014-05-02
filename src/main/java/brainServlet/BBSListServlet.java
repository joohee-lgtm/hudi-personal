package brainServlet;

import java.io.IOException;
import java.sql.DriverManager;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class BBSListServlet extends HttpServlet {
	public void doGet (HttpServletRequest request, HttpServletResponse response) 
			throws IOException, ServletException {
		
		String strUpperSeqNo = request.getParameter("LAST_SEQ_NO");//언제 쓰이는 거지
		int upperSeqNo; //이건 또 뭐지 
		if(strUpperSeqNo == null)
			upperSeqNo = Integer.MAX_VALUE;
		else
			upperSeqNo = Integer.parseInt(strUpperSeqNo);
		BBSList list = readDB(upperSeqNo);
		request.setAttribute("BBS_LIST", list);
		RequestDispatcher dispatcher = request.getRequestDispatcher("/brain13/BBSListView.jsp");
		dispatcher.forward(request, response);
	}
	
	private BBSList readDB(int upperSeqNo) throws ServletException {
		BBSList list = new BBSList();
		Connection conn = null;
		Statement stmt = null;
		String url = "jdbc:mysql://10.73.45.132:3306/test";
		String user = "root";
		String pw = "db0000";
		String sql = "select * from bbs where seqNo < " + upperSeqNo + " order by seqno desc;";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(url, user, pw);
			if(conn == null)
				throw new Exception("Failed to connect to DB");
			stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			for(int cnt = 0; cnt < 5; cnt ++) {
				if(!rs.next())
					break;
				list.setSeqNo(cnt, rs.getInt("seqNo"));
				list.setTitle(cnt, toUnicode(rs.getString("title")));
				list.setWriter(cnt, toUnicode(rs.getString("writer")));
				list.setDate(cnt, rs.getDate("wdate"));
				list.setTime(cnt, rs.getTime("wtime"));
			}
			if(!rs.next())
				list.setLastPage(true);
		}
		catch (Exception e) {
			throw new ServletException(e);
		}
		finally {
			try {
				stmt.close();
			}
			catch (Exception ignored) {
			}
			try {
				conn.close();
			}
			catch (Exception ignored) {
			}
		}
		return list;
	}

	private String toUnicode(String str) {
		if(str == null)
			return null;
		try {
			byte[] b = str.getBytes("ISO-8859-1");
			return new String(b);
		}
		catch (java.io.UnsupportedEncodingException uee) {
			System.out.println(uee.getMessage());
			return null;
		}
	}
}
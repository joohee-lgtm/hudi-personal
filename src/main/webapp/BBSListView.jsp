<%@ page language="java" contentType="text/html; charset=euc-kr"
    pageEncoding="US-ASCII"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
		<title>게시판</title>
	</head>
	<body>
		<H4>게시판 목록 보기</H4>
		<TABLE border=1>
			<TR>
				<TD width=40>순번</TD>
				<TD width=300>제목</TD>
				<TD width=80>작성자</TD>
				<TD width=90>작성일자</TD>
				<TD width=70>작성시각</TD>
			</TR>
			<c:forEach var="cnt" begin="0" end="${BBS_LIST.listSize - 1}">
				<TR>
					<TD>${BBS_LIST.seqNo[cnt]}</TD>
					<TD>${BBS_LIST.title[cnt]}</TD>
					<TD>${BBS_LIST.writer[cnt]}</TD>
					<TD>${BBS_LIST.date[cnt]}</TD>
					<TD>${BBS_LIST.time[cnt]}</TD>
				</TR>
			</c:forEach>
		</TABLE>
		<c:if test="${BBS_LIST.lastPage}">
			<a href="bbs-list?LAST_SEQ_NO=$${BBS_LIST.seqNo[BBS_LIST.listSize - 1]}">다음 페이지</a>
		</c:if>
	</body>
</html>
import React from "react";
import '../styles/Community1.css';

function Community1Page() {
  return (
    <div className="screen">
      <div className="div">
        <img className="logo" alt="Logo" src="logo.png" />
        <div className="searchframe">
          <div className="searchtext">테마명 / 작가명 검색하기</div>
          <img className="searchimg" alt="Searchimg" src="searchimg.png" />
        </div>
        <div className="mypage">마이페이지</div>
        <img className="profileimg" alt="Profileimg" src="profileimg.png" />
        <div className="thememenu">
          <div className="themewatch">테마 둘러보기</div>
          <div className="thememake">테마 제작</div>
          <div className="themesave">내 보관함</div>
          <div className="community">커뮤니티</div>
        </div>
        <div className="postingframe">
          <div className="postingtitle"> 제가 테마를 만들어봤어요&gt;&lt;</div>
          <div className="postingtopic">[홍보]</div>
          <div className="checkbox">□</div>
          <div className="postingdate"> 2024. 03. 12. 16:32</div>
        </div>
        <div className="pagenumber1"> 1</div>
        <div className="pagenumber2">2</div>
        <div className="nowpagenumber">
          <span className="pagenumber3">3</span>
          <span className="pagenumber33">&nbsp;</span>
        </div>
        <div className="pagenumber4">4</div>
        <div className="pagenumber5">&nbsp;&nbsp;5</div>
        <div className="frontbtn">&lt;&lt;</div>
        <div className="frontbtn-2">&lt;</div>
        <div className="backbtn">&gt;&gt;</div>
        <div className="backbtn-2">&gt;</div>
        <img className="line" alt="Line" src="line.png" />
        <div className="myposting">내가 작성한 글</div>
        <div className="mycomment">내가 작성한 댓글</div>
        <div className="temporarystorage">임시 보관함</div>
        <div className="selectallframe">
          <div className="selectall">전체 선택</div>
        </div>
        <div className="deleteframe">
          <div className="delete">선택한 글 삭제</div>
        </div>
      </div>
    </div>
  );
};
export default Community1Page;

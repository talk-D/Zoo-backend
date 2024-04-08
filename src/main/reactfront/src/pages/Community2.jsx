import React from "react";
import '../styles/Community2.css';

function Community2Page() {
    return (
<div className="screen">
    <div className="div">
        <img className="logo" alt="Logo" src="logo.png" />
        <div className="overlap">
            <div className="searchtext">테마명 / 작가명 검색하기</div>
            <img className="searchimg" alt="Searchimg" src="searchimg.png" />
        </div>
        <div className="mypage">마이페이지</div>
        <img className="profileimg" alt="Profileimg" src="myprofileimg.png" />
        <div className="thememenu">
            <div className="viewtheme">테마 둘러보기</div>
            <div className="thememake">테마 제작</div>
            <div className="themesave">내 보관함</div>
            <div className="community">커뮤니티</div>
        </div>
        <div className="overlap-group">
            <div className="H1">H1</div>
            <div className="H2">H2</div>
            <div className="H3">H3</div>
            <div className="H4">H4</div>
        </div>
        <div className="overlap-group-2">
            <div className="I">I</div>
            <div className="T">T</div>
            <div className="paintingimg">🎨</div>
            <div className="B">B</div>
        </div>
        <div className="pictureimg-wrapper">
            <div className="pictureimg">🏞️</div>
        </div>
        <div className="entertitle">제목을 입력하세요.</div>
        <div className="entercontent">내용을 입력해주세요.</div>
        <div className="upload-wrapper">
            <div className="upload">업로드하기</div>
        </div>
        <div className="temporarysave-wrapper">
            <div className="temporarysave">임시 저장</div>
        </div>
        <img className="line_1" alt="Line" src="line_1.png" />
        <img className="line_2" alt="Line" src="line_2.png" />
        <div className="overlap-2">
            <div className="category">카테고리</div>
            <img className="triangleimg" alt="Triangleimg" src="triangleimg.png" />
        </div>
        <div className="temporarystroge-wrapper">
            <div className="temporarystroge">임시 보관함</div>
        </div>
    </div>
</div>
    );
    };
export default Community2Page;

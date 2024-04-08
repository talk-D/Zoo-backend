import React from 'react';
import '../styles/Step1.css';

function Step1Page() {
    return (
      <div className="div-wrapper">
  <div className="div">
    <div className="thememenu">
      <div className="viewtheme">테마 둘러보기</div>
      <div className="thememake">테마 제작</div>
      <div className="mystorage">내 보관함</div>
      <div className="community">커뮤니티</div>
    </div>
    <div className="searchframe">
      <img className="searchimg" alt="Searchimg" src="searchimg.png" />
      <div className="searchtext">테마명 / 작가명 검색하기</div>
    </div>
    <img className="logo" alt="Logo" src="logo.png" />
    <div className="mypage">마이페이지</div>
    <img className="myprofileimg" alt="Myprofileimg" src="myprofileimg.png" />
    <div className="overlap-group">
      <div className="nextbtn">
        <div className="overlap-group-2">
          <div className="text-wrapper">다음</div>
        </div>
      </div>
      <div className="themeinfo">테마 정보</div>
        <div className="themename-kor">
        <div className="themename-kor-2">
          <div className="rectangle" />
          <div className="text-wrapper-2">테마 이름(한글)</div>
        </div>
        </div>
        <div className="themename-eng">
          <div className="rectangle-2" />
          <div className="text-wrapper-3">테마 이름(영문)</div>
        </div>
        <div className="theme-ID">
          <div className="overlap-2">
            <div className="text-wrapper-4">No. 100</div>
          </div>
          <div className="text-wrapper-5">테마ID</div>
        </div>
        <div className="themeversion">
          <div className="overlap-3">
            <div className="text-wrapper-6">10.3.5</div>
          </div>
          <div className="text-wrapper-7">테마 버전</div>
        </div>
      </div>
    </div>
    <div className="step-wrapper">
      <div className="step">STEP 1. 테마 정보</div>
    </div>
    <div className="overlap-3">
      <div className="step-2">STEP 2. 테마 제작</div>
    </div>
    <div className="thumbnail-wrapper">
      <div className="text-wrapper-8">썸네일</div>
    </div>
    <div className="pw-wrapper">
      <div className="pw">비밀번호</div>
    </div>
    <div className="freindlist-wrapper">
      <div className="freindlist">친구 목록</div>
    </div>
    <div className="chattingroom-wrapper">
      <div className="text-wrapper-8">채팅방</div>
    </div>
    <div className="tapbar-wrapper">
      <div className="tapbar">탭바</div>
    </div>
    <div className="overlap-4">
      <div className="step-2">STEP 3. 테마 다운</div>
    </div>
    <div className="notification-wrapper">
      <div className="notification">알림창</div>
    </div>
  </div>
    );
};
export default Step1Page;

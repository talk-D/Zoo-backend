import React from 'react';
import '../styles/ThemeMakestep2.css';

function ThemeMakestep2Page() {
  const handleStep1Click = () => {
    window.location.href = "Step1";
};
    return (
      <div className="div-wrapper">
  <div className="div">
    <div className="mypage">마이페이지</div>
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
    <img className="profileimg" alt="Profileimg" src="myprofileimg.png" />
    <img className="logo" alt="Logo" src="logo.png" />
    <div className="step1frame">
      <div className="step1" id="Step1Btn" onClick={handleStep1Click}>
        STEP1. 테마 정보</div>
    </div>
    <div className="step2frame">
      <div className="step2">STEP2. 테마 제작</div>
    </div>
    <div className="thumbnail-wrapper">
      <div className="thumbnail">썸네일</div>
    </div>
    <div className="pw-wrapper">
      <div className="pw">비밀번호</div>
    </div>
    <div className="friendlist-wrapper">
      <div className="friendlist">친구 목록</div>
    </div>
    <div className="chattingroom-wrapper">
      <div className="chattingroom">채팅방</div>
    </div>
    <div className="tapbar-wrapper">
      <div className="tapbar">탭바</div>
    </div>
    <div className="step3frame">
      <div className="step3">STEP3. 테마 다운</div>
    </div>
    <div className="bottomframe">
      <div className="bottombox" />
      <div className="backbtnframe">
        <div className="text-wrapper-2">이전</div>
      </div>
      <div className="nextbtnframe">
        <div className="text-wrapper-2">다음</div>
      </div>
    </div>
    <div className="notification-wrapper">
      <div className="notification">알림창</div>
    </div>
    <div className="leftbox">
      <div className="shape-icon">
        <div className="shapeiconframe">도형</div>
        <img className="shapeicon" alt="shapeicon" src="shapeicon.png" />
      </div>
      <div className="basic-icon">
        <div className="basiciconframe">기본 아이콘</div>
        <img className="basicicon" alt="basicicon" src="basicicon.png" />
      </div>
      <div className="text-icon">
        <div className="texticonframe">텍스트</div>
        <img className="texticon" alt="texticon" src="texticon.png" />
      </div>
      <div className="mystorage-icon">
        <div className="mystorageiconframe">내 보관함</div>
        <img className="mystorageicon" alt="mystorageicon" src="mystorageicon.png" />
      </div>
    </div>
  </div>
</div>
    );
};
export default ThemeMakestep2Page;
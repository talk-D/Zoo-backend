import React from 'react';
import '../styles/ThemeMake.css';

function ThemeMakePage() {
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
      <img className="searchimg" alt="searchimg" src="searchimg.png" />
      <div className="searchtext">테마명 / 작가명 검색하기</div>
    </div>
    <img className="profileimg" alt="Profileimg" src="myprofileimg.png" />
    <img className="logo" alt="Logo" src="logo.png" />
    <div className="overlap-group">
      <div className="step" />
      <div className="text-wrapper">STEP1. 테마 정보</div>
    </div>
    <div className="overlap-2">
      <div className="step" />
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
    <div className="step-wrapper">
      <div className="text-wrapper">STEP3. 테마 다운</div>
    </div>
    <div className="overlap-3">
      <div className="next-wrapper">
        <div className="text-wrapper-2">다음</div>
      </div>
      <div className="back-wrapper">
        <div className="text-wrapper-2">이전</div>
      </div>
      <div className="box" />
    </div>
    <div className="notification-wrapper">
      <div className="notification">알림창</div>
    </div>
    <div className="leftbox">
      <div className="shapeicon">
        <div className="text-wrapper-3">도형</div>
        <img className="tdesign-icon" alt="Tdesign icon" src="tdesign_icon.png" />
      </div>
      <div className="basicicon">
        <div className="text-wrapper-4">기본 아이콘</div>
        <img className="fluent-sticker-add" alt="Fluent sticker add" src="fluent_sticker-add-24-regular.png" />
      </div>
      <div className="texticon">
        <div className="text-wrapper-5">텍스트</div>
        <img className="vector" alt="Vector" src="vector.png" />
      </div>
      <div className="mystorageicon">
        <div className="text-wrapper-6">내 보관함</div>
        <img className="clarity-directory" alt="Clarity directory" src="clarity_directory-line.png" />
      </div>
    </div>
  </div>
</div>
);
};
export default ThemeMakePage;


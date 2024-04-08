import React from 'react';
import '../styles/Main.css';

function MainPage() {
    const handleLoginClick = () => {
        window.location.href = "login";
    };

    const handleViewthemeClick = () => {
        window.location.href = "viewtheme";
    };

    const handleThemeMakeClick = () => {
        window.location.href = "thememake";
    };

    const handleCommunityClick = () => {
        window.location.href = "community";
    };

    const handleMyStorageClick = () => {
        window.location.href = "mystorage";
    };

    return (
        <div className="screen"> 
            <div className="div"> 
                <div className="bottomframe"> 
                    <div className="hottheme">실시간 핫한 테마를&nbsp;&nbsp;만나보세요!</div> 
                    <div className="todaytheme">오늘의 인기 테마</div> 
                </div> 
                <div className="thememenu"> 
                    <div className="thememake" id="ThemeMakeBtn" onClick={handleThemeMakeClick}>
                    테마 제작
                    </div> 
                    <div className="viewtheme" id="ViewThemeBtn" onClick={handleViewthemeClick}>
                    테마 둘러보기
                    </div> 
                    <div className="mystorage" id="MyStorageBtn" onClick={handleMyStorageClick}>
                    내 보관함
                    </div> 
                    <div className="community"id="CommunityBtn" onClick={handleCommunityClick}>
                    커뮤니티
                    </div> 
                </div> 
                <div className="searchframe"> 
                    <img className="searchimg" alt="Searchimg" src="searchimg.png" /> 
                    <div className="searchtext">테마명 / 작가명 검색하기</div> 
                </div> 
                <img className="logo" alt="Logo" src="logo.png" /> 
                <div className="login-signup" id="loginLink" onClick={handleLoginClick}>
                    로그인 / 회원가입
                    </div>
            </div> 
        </div> 
    ); 
};
export default MainPage;
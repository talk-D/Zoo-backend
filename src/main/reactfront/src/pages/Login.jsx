import React from 'react';
import '../styles/Login.css';

function LoginPage() {
    return (
        <div className="screen">
            <div className="entire"></div>
            <div className="overlap-group" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img className="logoimg1" alt="Logoimg1" src="logo.png" />
    <div className="searchframe" />
    <div className="searchtext">테마명 / 작가명 검색하기</div>
    <img className="searchimg" alt="Searchimg" src="searchimg.png" />
    <div className="themeframe" />
    <div className="login-signup">로그인 / 회원가입</div>
    <div className="bottom-box" />
    <div className="loginentire" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="emailframe" />
        <img className="logoimg2" alt="Logoimg2" src="logo.png" />
        <img className="loginline" alt="Loginline" src="line.png" />
        <div className="logintext">로그인</div>
        <div className="pwframe" />
        <div className="emailtext">이메일</div>
        <div className="searchpw">비밀번호 찾기</div>
        <div className="searchid">아이디 찾기</div>
        <img className="kakaologinimg" alt="Kakaologinimg" src="kakaologinimg.png" />
        <div className="signupemail">이메일로 회원가입하기</div>
        <div className="loginbtnframe">
            <div className="loginbtntext">로그인</div>
        </div>
        <div className="pwtext">비밀번호</div>
    </div>
</div>
</div>
    );
};

export default LoginPage;

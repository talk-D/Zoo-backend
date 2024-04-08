import React from 'react';
import '../styles/Login.css';

function LoginPage() {
    return (
        <div class="screen">
  <div class="overlap-group-wrapper">
      <img class="logo" alt="Logo" src="logo.png" />
      <div class="searchframe"></div>
      <div class="searchtext">테마명 / 작가명 검색하기</div>
      <img class="searchimg" alt="Searchimg" src="searchimg.png" />
      <div class="themeframe"></div>
      <div class="login-signup">로그인 / 회원가입</div>
      <div class="bottom-box"></div>
      <div class="loginentire"></div>
      <div class="emailframe"></div>
      <img class="img" alt="Logoimg" src="logo.png" />
      <img class="loginline" alt="Loginline" src="line.png" />
      <div class="logintext">로그인</div>
      <div class="pwframe"></div>
      <div class="emailtext">이메일</div>
      <div class="searchpw">비밀번호 찾기</div>
      <div class="searchid">아이디 찾기</div>
      <img class="kakaologinimg" alt="Kakaologinimg" src="kakaologinimg.png" />
      <div class="signupemail">이메일로 회원가입하기</div>
      <div class="loginbtnframe">
        <div class="loginbtntext">로그인</div>
      </div>
      <div class="pwtext">비밀번호</div>
    </div>
  </div>
    );
};
export default LoginPage;
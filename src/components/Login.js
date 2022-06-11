import React from 'react';
import styled from 'styled-components';

const Login = () => {

  return (
    <>
    <div>
      <h1>Login 컴포넌트 화면</h1>
      <Login_wrap>
        <Login_title>로그인</Login_title>
        <label>
          <p>아이디(이메일)</p>
          <input type="email" />
        </label>

        
        <label>
          <p>비밀번호</p>
          <input type="email" />
        </label>
        <br/>
        <br/>
        <Buttons>
        <button>취소</button>
        <button>로그인</button>
        </Buttons>
      </Login_wrap>
    </div>
    </>
  );
}

let Login_wrap = styled.div`
margin:0 auto;
width:500px;
height:400px;
padding:20px;
background-color:#e0e0e0;
text-align:left;

 input {
  width:100%;
  height:30px;
  border:none;
  box-sizing:border-box;
  padding: 0 6px;
 }

 input:focus {
  outline-color:#aa7e4d;
 }

 button {
  color: #aa7e4d;
  border:none;
  width: 80px;
  height:30px;
  background-color: #edb6d1;
  border-radius:5px;
  margin-left:5px;
  font-size:16px;
 }
`

let Login_title = styled.div`
font-size:50px;
font-weight:100;
border-bottom:5px solid #edb6d1;
text-align:center;
`

let Buttons = styled.div`
 button {
  margin:0 10px;
 }

 width:220px;
 margin:10px auto;
`

export default Login;
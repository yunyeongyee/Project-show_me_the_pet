import React from 'react';
import styled from 'styled-components';

const SignUp = () => {

  return (
    <>
    <div>
      <h1>SignUp 컴포넌트 페이지</h1>
      <SignUp_wrap>
        <SignUp_title>회원가입</SignUp_title>
        <label>
          <p>아이디(이메일)</p>
          <input type="email" />
        </label>
        <button>중복확인</button>
        
        <label>
          <p>비밀번호</p>
          <input type="email" />
        </label>
        <label>
          <p>비밀번호 확인</p>
          <input type="email" />
        </label>
        <label>
          <p>닉네임</p>
          <input type="email" />
        </label>

        
        <button>중복확인</button>
        <br/>
        <br/>
        <Buttons>
        <button>취소</button>
        <button>가입하기</button>
        </Buttons>


      </SignUp_wrap>



    </div>
    </>
  )
}

let SignUp_wrap = styled.div`
margin:0 auto;
width:500px;
height:550px;
padding:20px;
background-color:#e0e0e0;
text-align:left;

 input {
  width:80%;
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

let SignUp_title = styled.div`
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

export default SignUp;
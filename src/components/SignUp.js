import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignUp = () => {

  const userid_ref = React.useRef(null);
  const password_ref = React.useRef(null);
  const confirmPassword_ref = React.useRef(null);
  const name_ref = React.useRef(null);


// const signup_list = {
//     userid : userid_ref.current.value,
//     password : password_ref.current.value,
//     confirmPassword : confirmPassword_ref.current.value,
//     name : name_ref.current.value,
//   }

  const signup_list = {
    userid : "testid2022@test.com",
    password : "test33",
    confirmPassword : "test33",
    name : "test입니다",
  }


  const signupDB = () => {
    axios.post("http://localhost:5001/login", signup_list).then(response => {
      const success = response.data[0].success
      const msg = response.data[0].msg
     if ( success === true) {
      alert(msg);
     } else if (success === false) {
      alert("회원 가입에 실패.");
     }
  });
  } 

  return (
    <>
    <div>
      <h1>SignUp 컴포넌트 페이지</h1>
      <SignUp_wrap>
        <SignUp_title>회원가입</SignUp_title>
        <label>
          <p>아이디(이메일)</p>
          <input type="email" ref={userid_ref}/>
        </label>
        <button>중복확인</button>
        
        <label>
          <p>비밀번호</p>
          <input type="password" ref={password_ref} />
        </label>
        <label>
          <p>비밀번호 확인</p>
          <input type="password" ref={confirmPassword_ref}/>
        </label>
        <label>
          <p>닉네임</p>
          <input type="text" ref={name_ref}/>
        </label>

        
        <button>중복확인</button>
        <br/>
        <br/>
        <Buttons>
        <button>취소</button>
        <button onClick={signupDB}>가입하기</button>
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
text-align:left;
box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);

 input {
  width:80%;
  height:30px;
  border:none;
  box-sizing:border-box;
  padding: 0 6px;
  border-bottom: 1px solid #000;
 }

 input:focus {
  outline-color:#edb6d1;
 }

 button {
  color: #000;
  border:none;
  width: 80px;
  height:30px;
  background-color: #e0e0e0;
  border-radius:5px;
  margin-left:5px;
  font-size:16px;
  cursor: pointer;
 }

 button:hover {
  background-color:#edb6d1;
  color:#fff;
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
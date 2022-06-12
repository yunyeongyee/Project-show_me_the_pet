import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Login = () => {

  const userid_ref = React.useRef(null);
  const password_ref = React.useRef(null);


    // const login_list = {
    //     userid : userid_ref.current.value,
    //     password : password_ref.current.value,
    //   }

    const login_list = {
          userid : "test00@test.com",
          password : "testtest",
        }
    
   

  const loginDB = () => {
    axios.post("http://localhost:5001/login", login_list).then(response => {
      const success = response.data[0].success
      const name = response.data[0].name
      const msg = response.data[0].msg
     if ( success === true) {
      alert(name+" 님, 환영합니다!");
     } else if (success === false) {
      alert(msg);
     }
  });
  } 


  return (
    <>
    <div>
      <h1>Login 컴포넌트 화면</h1>
      <Login_wrap>
        <Login_title>로그인</Login_title>
        <label>
          <p>아이디(이메일)</p>
          <input type="email" ref={userid_ref} />
        </label>

        
        <label>
          <p>비밀번호</p>
          <input type="password" ref={password_ref}/>
        </label>
        <br/>
        <br/>
        <Buttons>
        <button>취소</button>
        <button onClick={loginDB}>로그인</button>
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
text-align:left;
box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);

 input {
  width:100%;
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
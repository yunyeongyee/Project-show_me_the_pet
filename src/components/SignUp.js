import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
  const userid_ref = React.useRef(null);
  const password_ref = React.useRef(null);
  const confirmPassword_ref = React.useRef(null);
  const name_ref = React.useRef(null);




  // const signup_list = {
  //   "userId" : "testid2022@test.com",
  //   "password" : "test33",
  //   "confirmPassword" : "test33",
  //   "name" : "테스트다"
  // }






  const signupDB = () => {

    const signup_list = {
      userid : userid_ref.current.value,
      password : password_ref.current.value,
      confirmPassword : confirmPassword_ref.current.value,
      name : name_ref.current.value,
    }

    axios.post("http://15.164.164.17/api/users", signup_list).then(response => {
      const success = response.data.success
      const msg = response.data.msg
     if (success === true) {
      alert(msg);
     } else if (success === false) {
      alert("회원 가입에 실패.");
     }
  });
  } 


  
 

  const checkID = () => {
    const check_id = {
      "userId" : userid_ref.current.value
    }
    axios.post("http://15.164.164.17/api/check/userId", check_id).then(response => {
      const success = response.data.success
      const msg = response.data.msg
      const errorMessage = response.data.errorMessage

        alert(msg);
       
    })
    .catch(error => {
      console.log(error);
      alert(error.response.data.msg);
    })
  }

  const checkName = () => {
    const check_name = {
      "name" : name_ref.current.value,
    }
    axios.post("http://15.164.164.17/api/check/name", check_name).then(response => {
      console.log(response);
      const msg = response.data.msg
        alert(msg); 
        navigate('/PostList'); 
    })
    .catch(error => {
      console.log("에러 =>", error);
      const name_length = name_ref.current.value.length;
      const msg = error.response.data.msg;
      const errorMessage = error.response.data.errorMessage;

      alert(errorMessage);

      // if ( name_length < 2 ) {
      //   alert(errorMessage)
      // } else if ( name_length > 8 ){
      //   alert(errorMessage)
      // } else {
      //   alert(msg);
      // }
    })
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
        <button onClick={checkID}>중복확인</button>
        
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

        
        <button onClick={checkName}>중복확인</button>
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
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

  const [id_msg, set_id_msg] = React.useState(null);
  const [id_check, set_id_check] = React.useState(false);
  const [pw_msg, set_pw_msg] = React.useState(null);
  const [check_pw, set_check_pw] = React.useState(null);
  const [confirm_pw_msg, set_confirm_pw_msg] = React.useState(null);
  const [name_msg, set_name_msg] = React.useState(null);
  const [name_check, set_name_check] = React.useState(false);


   const isEmail = (asValue) => {
    var regExp = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  const checkIdState = (e) => {
    let id = e.target.value

    if (id === "") {
      set_id_msg("");
    } else if (!isEmail(id)) {
      set_id_msg("이메일 형식이 아닙니다.");
    } else {
      set_id_msg("");
    }
  }

  const checkPwState = (e) => {
    let pw = e.target.value
    if (pw === "" || pw.length >= 5) {
      set_pw_msg("");
      set_check_pw(pw);
    } else if (pw.length < 4) {
      set_pw_msg("비밀번호는 4자 이상이어야 합니다.");
    } 
  }

  const confirmPwState = (e) => {
    let confirm_pw = e.target.value
    let get_pw = check_pw
    if (get_pw !== confirm_pw) {
      set_confirm_pw_msg("비밀번호가 일치하지 않습니다!")
    } else if (get_pw === confirm_pw || confirm_pw === "") {
      set_confirm_pw_msg("")
    } 
  }

  const checkNameState = (e) => {
    let name = e.target.value
    if (name === "") {
      set_name_msg("")
    } else if ( name.length < 2 || name.length > 8 ) {
      set_name_msg("2~8자의 한글, 영문, 숫자만 사용 가능합니다.")
    } else {
      set_name_msg("")
    }
  }


  const checkID = () => {
    const check_id = {
      "userId" : userid_ref.current.value
    }
    axios.post("http://15.164.164.17/api/check/userId", check_id).then(response => {
      const msg = response.data.msg
        set_id_check(true);
        alert(msg);
    })
    .catch(error => {
      const msg = error.response.data.msg;
      set_id_check(false);
      alert(msg);
    })
  }

  const checkName = () => {
    const check_name = {
      "name" : name_ref.current.value,
    }
    axios.post("http://15.164.164.17/api/check/name", check_name).then(response => {
      const msg = response.data.msg
        set_name_check(true);
        alert(msg); 
     
    })
    .catch(error => {
      const name_length = name_ref.current.value.length;
      const msg = error.response.data.msg;
      const errorMessage = error.response.data.msg;

      set_name_check(false);

      if ( name_length < 2 ) {
        alert(msg)
      } else if ( name_length > 8 ){
        alert(msg)
      } else {
        alert(msg);
      }
    })
  }

  const signupDB = () => {
    

    const signup_list = {
      userId : userid_ref.current.value,
      password : password_ref.current.value,
      confirmPassword : confirmPassword_ref.current.value,
      name : name_ref.current.value,
    }

    if (!id_check) {
      alert("이메일 중복확인 검사를 하지 않았습니다.");
      return;
    }

    if(!name_check) {
      alert("닉네임 중복확인 검사를 하지 않았습니다.");
      return;
    }

    axios.post("http://15.164.164.17/api/users", signup_list)
    .then(response => {
      const msg = response.data.msg
      alert(msg);
      navigate("/Login");
  })
  .catch(error => {
    alert(error.response.data.msg);
  });
  } 

  return (
     <>
        <div>
           <SignUp_wrap>
              <SignUp_title>회원가입</SignUp_title>
              <label>
                 <p>아이디(이메일)</p>
                 <input type="email" ref={userid_ref} onChange={checkIdState}/>
              </label>
              <button onClick={checkID}>중복확인</button>
              <Check_msg>{id_msg}</Check_msg>

              <label>
                 <p>비밀번호</p>
                 <input type="password" ref={password_ref} onChange={checkPwState} />
              </label>
              <Check_msg>{pw_msg}</Check_msg>
              <label>
                 <p>비밀번호 확인</p>
                 <input type="password" ref={confirmPassword_ref} onChange={confirmPwState}/>
              </label>
              <Check_msg>{confirm_pw_msg}</Check_msg>
              <label>
                 <p>닉네임</p>
                 <input type="text" ref={name_ref} onChange={checkNameState}/>
              </label>
              <button onClick={checkName}>중복확인</button>
              <Check_msg>{name_msg}</Check_msg>
              <br />
              <Buttons>
                 <button onClick={signupDB}>가입하기</button>
                 <button>취소</button>
              </Buttons>
           </SignUp_wrap>
        </div>
     </>
  );
}

let Check_msg = styled.div`
color:red;
height:20px;
box-sizing:border-box;
font-size:13px;
margin-top:1px;
`

let SignUp_wrap = styled.div`
margin:150px auto;
width:500px;
height:550px;
padding:20px;
text-align:left;
background-color:whitesmoke;
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
 }

 p {
  margin-bottom:2px;
 }
`

let SignUp_title = styled.div`
font-size:30px;
font-weight:400;
border-bottom:5px solid #edb6d1;
text-align:center;
padding-bottom: 10px; 
margin-bottom: 40px;
`

let Buttons = styled.div`
 button {
  margin:0 10px;
 }

 width:220px;
 margin:10px auto;
`

export default SignUp;
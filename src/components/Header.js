import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

/*COMPONENTS*/
/*CSS*/
import '../App.css';

const Header = (props) => {
   const navigate = useNavigate();
   const token = localStorage.getItem("login-token")
   console.log(token)
   // const getUserInfo =() =>{
   //     return () 
   // };
   // const isAdmin =() =>{
   //     return axios.get("url" + "admin", {headers: authHeader() });
   // };
   // const ClickLogin = () => {
   //    localStorage.getItem('login-token');
   //    navigate('/PostList');
   // };
   const ClickLogOut = () => {
      localStorage.removeItem('login-token');
      navigate('/Login');
   };

   return (
      <>
         <header className="Header">
            <h1
               className="HeaderTitle"
               onClick={() => {
                  window.location.replace('/');
               }}
            >
               쇼미더펫
            </h1>

            {!token ? (
               <nav>
                  <Button>로그인</Button>
                  <Button>회원가입</Button>
               </nav>
            ) : (
               <nav>
                  <Button onClick={ClickLogOut}>로그아웃</Button>
                  <Button>회원가입</Button>
               </nav>
            )}
         </header>
      </>
   );
};
const Button = styled.button`
   width: 67px;
   height: 30px;
   float: right;
   margin: 20px 10px;
   padding: 5px;
   align-items: center;
   justify-content: center;
   color: #000;
   background-color: #e0e0e0;
   border: 1px solid #e0e0e0;
   border-radius: 5px;

   @keyframes push {
      50% {
         transform: scale(0.85);
      }
      100% {
         transform: scale(1);
      }
   }
   &:hover,
   &:active,
   &:focus {
      cursor: pointer;
      animation-name: push;
      animation-duration: 0.4s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      background-color: #ea9cc3;
      border: 1px solid #ea9cc3;
   }
`;
export default Header;
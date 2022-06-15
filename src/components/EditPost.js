import React from 'react';
import styled from 'styled-components';

function EditPost({ setOpenModal }) {
   return (
      <ModalBackground>
         <ModalContainer>
            <TitleCloseBtnBox>
               <TitleCloseBtn
                  onClick={() => {
                     setOpenModal(false);
                  }}
               >
                  X
               </TitleCloseBtn>
            </TitleCloseBtnBox>
            <Title>
               <h1>Are You Sure You Want to Continue?</h1>
            </Title>
            <Body>
               <p>The next page looks amazing. Hope you want to go there!</p>
            </Body>
            <Footer>
               <CancelBtn
                  onClick={() => {
                     setOpenModal(false);
                  }}
                  id="cancelBtn"
               >
                  Cancel
               </CancelBtn>
               <ContinueBtn>Continue</ContinueBtn>
            </Footer>
         </ModalContainer>
      </ModalBackground>
   );
}
const ModalBackground = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(200, 200, 200);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 100;
`;

const ModalContainer = styled.div`
   width: 500px;
   height: 500px;
   border-radius: 12px;
   background-color: white;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   display: flex;
   flex-direction: column;
   padding: 25px;
  
`;

const Title = styled.div`
   display: inline-block;
   text-align: center;
   margin-top: 10px;
`;
const TitleCloseBtnBox = styled.div`
   display: flex;
   justify-content: flex-end;
`;

const TitleCloseBtn = styled.button`
   background-color: transparent;
   border: none;
   font-size: 25px;
   cursor: pointer;
`;

const Body = styled.div`
   flex: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.7rem;
   text-align: center;
`;

const Footer = styled.div`
   flex: 20%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ContinueBtn = styled.button`
   width: 150px;
   height: 45px;
   margin: 10px;
   border: none;
   background-color: cornflowerblue;
   color: white;
   border-radius: 8px;
   font-size: 20px;
   cursor: pointer;
`;

const CancelBtn = styled.button`
   background-color: crimson;
`;

export default EditPost;

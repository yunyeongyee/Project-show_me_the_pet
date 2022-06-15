import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function EditPost({ setOpenModal }) {
   const title = React.useRef(null);
   const content = React.useRef(null);
   const [imageSrc, setImageSrc] = useState('');
   const img = React.useRef(null);
   const file_link = React.useRef(null);
   return (
      <ModalBackground>
         <ModalCard>
            <TitleCloseBtnBox>
               <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => {
                     setOpenModal(false);
                  }}
                  style={{
                     margin: 7,
                     fontSize: 20,
                     position: 'absolute',
                     right: 3,
                     top: 3,
                     cursor: 'pointer',
                  }}
               />
            </TitleCloseBtnBox>
            <Body>
               <Title>Title</Title>
               <Input
                  ref={title}
                  type="text"
               />
               <br />

               <SubTitle>Choose Image</SubTitle>
               <Label className="input-file-button" htmlFor="input-file">
                  <InputFile type="file" id="input-file" />
                  사진선택
               </Label>
               <Preview>
                  {imageSrc && (
                     <img
                        src={imageSrc}
                        alt="preview-img"
                        style={{ width: 100 }}
                     />
                  )}
               </Preview>
               <br />
               <SubTitle2>Contents</SubTitle2>
               <Textarea
                  ref={content}
                  type="text"
               />
            </Body>
            <Footer>
               <ContinueBtn>Edit</ContinueBtn>
               <CancelBtn
                  onClick={() => {
                     setOpenModal(false);
                  }}
                  id="cancelBtn"
               >
                  Cancel
               </CancelBtn>
            </Footer>
         </ModalCard>
      </ModalBackground>
   );
}
const ModalBackground = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   z-index: 100;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: rgba(255, 255, 255, 0.15);
   backdrop-filter: blur(5px);
`;
//    animation: modal-bg-show 1s;
//    @keyframes modal-bg-show {
//       from {
//          opacity: 0;
//       }
//       to {
//          opacity: 1;
//       }
//    }

const ModalCard = styled.div`
   max-width: 300px;
   position: relative;
   top: 0;
   right: 0;
   width: 95%;
   display: flex;
   flex-direction: column;
   padding: 25px;
   border-radius: 5px;
   background-color: white;
   box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
`;

const TitleCloseBtnBox = styled.div`
   display: flex;
   justify-content: flex-end;
`;

const Body = styled.div`
   margin: 10px auto;
   align-items: center;
   font-size: 0.9em;
   text-align: center;
`;
const Title = styled.p`
   margin: 3px auto;
   line-height: 5px;
`;

const SubTitle = styled.span`
   line-height: 5px;
`;

const SubTitle2 = styled.p`
   position: relative;
   top: 10px;
   margin: 10px 0;
   line-height: 5px;
`;

const Input = styled.input`
   position: relative;
   bottom: 10px;
   margin: 25px 0;
   padding: 5px auto;
   width: 95%;
   max-width: 200px;
   line-height: 11px;
   background-color: transparent;
   color: #282c34;
   border: none;
   border-bottom: 1px solid #282c34;
   &:hover,
   &:focus,
   &:active {
      cursor: pointer;
      border-bottom: 1px solid #ea9cc3;
      outline-color: #edb6d1;
   }
`;

const InputFile = styled.input`
   display: none;
   width: 100px;
   max-height: 40px;
   background-color: whitesmoke;
   color: #282c34;
   border: none;
   border-bottom: 1px solid #282c34;
`;

const Label = styled.label`
   margin: auto 5px;
   padding: 2px 4px;
   color: #000;
   background-color: #e0e0e0;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
`;

const Preview = styled.div`
   width: 300px;
`;

const Textarea = styled.textarea`
   position: relative;
   top: 10px;
   width: 75%;
   height: 110px;
   padding: 10px;
   overflow-x: hidden;
   overflow-y: auto;
   background-color: transparent;
   border: solid 1px #282c34;
   border-radius: 5px;
   resize: none;
   &:hover,
   &:focus,
   &:active {
      cursor: pointer;
      border: 1px solid #ea9cc3;
      outline-color: #edb6d1;
   }
`;

const Footer = styled.div`
   flex: 20%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ContinueBtn = styled.button`
   display: flex;
   flex-direction: column;
   position: relative;
   left: 10px;
   top: 10px;
   width: 65px;
   height: 27px;
   margin: 5px 10px;
   padding: 5px;
   align-items: center;
   justify-content: center;
   margin: 10px 5px;
   padding: 6px 10px;
   color: #000;
   background-color: #e0e0e0;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
   &:hover,
   &:active,
   &:focus {
      cursor: pointer;
      background-color: #ea9cc3;
      border: 1px solid #ea9cc3;
   }
`;

const CancelBtn = styled.button`
   display: flex;
   flex-direction: column;
   position: relative;
   left: 10px;
   top: 10px;
   width: 65px;
   height: 27px;
   margin: 5px 10px;
   padding: 5px;
   align-items: center;
   justify-content: center;
   margin: 10px 5px;
   padding: 6px 10px;
   color: #000;
   background-color: #e0e0e0;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
   &:hover,
   &:active,
   &:focus {
      cursor: pointer;
      background-color: #ea9cc3;
      border: 1px solid #ea9cc3;
   }
`;

export default EditPost;

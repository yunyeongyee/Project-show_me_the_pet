import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const AddPost = () => {
      const navigate = useNavigate();
       const title = React.useRef(null);
       const content = React.useRef(null);
       const date = React.useRef(null);
       const file_link = React.useRef(null);
       const [imageSrc, setImageSrc] = useState('');
       
   return (
      <>
         <Container>
            <Card>
               <Form>
                  <ButtonUpload>Upload</ButtonUpload>
                  <Title>Title</Title>
                  <Input ref={title} type="text" />
                  <SubTitle>Date</SubTitle>
                  <Input ref={date} type="date" />
                  <SubTitle>Choose Image</SubTitle>
                  <InputFile ref={file_link} type="file" />
                  <Preview>
                     {imageSrc && (
                        <img
                           src={imageSrc}
                           alt="preview-img"
                           style={{ width: 100 }}
                        />
                     )}
                  </Preview>
                  <SubTitle2>Contents</SubTitle2>
                  <Textarea ref={content} type="text" />
               </Form>
            </Card>
         </Container>
      </>
   );
};
const Container = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;
   align-items: center;
   justify-content: center;
   position: relative;
   top: 0px;
   margin: 20px auto;
   padding: 20px auto;
`;
const Card = styled.div`
   position: relative;
   width: 300px;
   max-height: 600px;
   margin: auto;
   background: #e0e0e0;
   border-radius: 5px;
   overflow: hidden;
   &:hover,
   &:focus,
   &:active {
      cursor: pointer;
      border: 1px solid #ea9cc3;
   }
`;
const Form = styled.div`
   margin: 20px auto;
`;

const ButtonUpload = styled.button`
   display: flex;
   flex-direction: column;
   position: relative;
   left: 210px;
   bottom: 10px;
   width: 65px;
   height: 27px;
   margin: 5px 10px;
   padding: 5px;
   align-items: center;
   justify-content: center;
   background-color: transparent;
   border: 1px solid #ea9cc3;
   border-radius: 5px;
   color: #ea9cc3;
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
   }
`;

const Title = styled.p`
   margin: 3px auto;
   line-height: 5px;
`;
const SubTitle = styled.p`
   line-height: 5px;
`;
const SubTitle2 = styled.p`
   position: relative;
   line-height: 5px;
`;
const Input = styled.input`
   position: relative;
   bottom: 10px;
   margin: 15px 0;
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
      transform: scale(1.1);
   }
`;
const InputFile = styled.input`
   input[type='file'] {
      display: none;
      max-width: 100px;
      background-color: whitesmoke;
      color: #282c34;
      border: none;
      border-bottom: 1px solid #282c34;

      input#file-upload-button {
         display: flex;
         flex-direction: column;
         position: relative;
         top: 7px;
         left: 200px;
         width: 65px;
         height: 27px;
         margin: 5px 10px;
         padding: 5px;
         align-items: center;
         justify-content: center;
         background-color: transparent;
         border: 1px solid #ea9cc3;
         border-radius: 5px;
         color: #ea9cc3;
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
         }
      }
   }
`;
const Preview = styled.div``;
const Textarea = styled.textarea`
   position: relative;
   width: 80%;
   height: 60px;
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
   }
`;
export default AddPost;

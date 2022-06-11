import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> post
/*COMPONENTS*/
import HeaderLogin from './HeaderLogin';
const AddPost = () => {
      const navigate = useNavigate();
      const title = React.useRef(null);
      const name = React.useRef(null);
      const date = React.useRef(null);
      const content = React.useRef(null);
      const file_link = React.useRef(null);
      const [imageSrc, setImageSrc] = useState('');
<<<<<<< HEAD
   return (
      <>
         <HeaderLogin />
=======
       
   return (
      <>
      <HeaderLogin />
>>>>>>> post
         <Container>
            <Card>
               <Form>
                  <ButtonUpload>Upload</ButtonUpload>
                  <Title>Title</Title>
                  <Input ref={title} type="text" />
<<<<<<< HEAD
                  <br />
=======
                  <Title>Name</Title>
                  <Input ref={name} type="text" />
                  <SubTitle>Date</SubTitle>
                  <Input ref={date} type="date" />
>>>>>>> post
                  <SubTitle>Choose Image</SubTitle>
                  <Label className="input-file-button" for="input-file">
                     <InputFile ref={file_link} type="file" id="input-file" />
                     업로드
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
   max-width: 350px;
   width: 95%;
   padding: 1em;
   margin: 1em;
   border: 1px solid #transparent;
   border-radius: 5px;
   background: transparent;
   box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
   transition: all ease 200ms;
   &:hover,
   &:focus,
   &:active {
      cursor: pointer;
   }
`;
const Form = styled.div`
   margin: 20px auto;
`;
const ButtonUpload = styled.button`
   display: flex;
   flex-direction: column;
   position: relative;
   left: 10px;
   bottom: 30px;
   float: right;
   width: 65px;
   height: 27px;
   margin: 5px 10px;
   padding: 5px;
   align-items: center;
   justify-content: center;
   background-color: transparent;
   border: 1px solid #EA9CC3;
   border-radius: 5px;
   color: #EA9CC3;
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
const DateTitle = styled.p`
   line-height: 5px;
`;
const SubTitle = styled.span`
   line-height: 5px;
`;
const SubTitle2 = styled.p`
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
   color: #282C34;
   border: none;
   border-bottom: 1px solid #282C34;
   &:hover,
   &:focus,
   &:active {
      cursor: pointer;
      border-bottom: 1px solid #EA9CC3;
      transform: scale(1.1);
   }
`;
const InputFile = styled.input`
<<<<<<< HEAD
=======
   input[type='file'] label {
>>>>>>> post
      display: none;
      max-width: 100px;
      background-color: whitesmoke;
      color: #282C34;
      border: none;
      border-bottom: 1px solid #282C34;
  
`;

const Label = styled.label`
   margin: 0 5px;
   padding: 6px 10px;
   background-color: #EA9CC3;
   border-radius: 4px;
   color: white;
   cursor: pointer;
`;
const Preview = styled.div`
width: 300px;
`;
<<<<<<< HEAD
=======
const Preview = styled.div`
width: 300px;

`;
>>>>>>> post
const Textarea = styled.textarea`
   position: relative;
   width: 75%;
   height: 100px;
   padding: 10px;
   overflow-x: hidden;
   overflow-y: auto;
   background-color: transparent;
   border: solid 1px #282C34;
   border-radius: 5px;
   resize: none;
   &:hover,
   &:focus,
   &:active {
      cursor: pointer;
      border: 1px solid #EA9CC3;
   }
`;
export default AddPost;
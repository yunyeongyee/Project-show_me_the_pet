import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/*COMPONENTS*/
import Header from './Header';
const AddPost = () => {
   const navigate = useNavigate();
   const [is_login, setIsLogin] = useState(true);
   const title = React.useRef(null);
   const content = React.useRef(null);
   const [imageSrc, setImageSrc] = useState('');
   const img = React.useRef(null);
   const file_link = React.useRef(null);

   // const auth = getAuth();
   // const user = auth.currentUser;
   // const user_list = useSelector((state) => state.users.list);
   // const user_index = user_list.findIndex((p) => {
   //     return p.user_id === user.email;
   const timeStamp = new Date();
   const timePosted =
      timeStamp.toDateString() +
      ' (' +
      timeStamp.getHours() +
      ':' +
      timeStamp.getMinutes() +
      ' )';
   // });

   const addPostAxios = () => {
      axios
         .post('http://15.164.164.17/api/boards', {
            title: title.current?.value,
            content: content.current.value,
            img: file_link.current.url,
         })
         .then(function (response) {
            alert('Add Post');
            navigate('/PostList');
            console.log(response);
         })
         .catch(function (error) {
            console.log(error.response.data.errorMessage);
         });
   };
   //   const uploadFB = async (e) => {
   //      const encodeFileToBase64 = (fileBlob) => {
   //         const reader = new FileReader();
   //         reader.readAsDataURL(fileBlob);
   //         return new Promise((resolve) => {
   //            reader.onload = () => {
   //               setImageSrc(reader.result);
   //               resolve();
   //            };
   //         });
   //      };
   //      const uploaded_file = await uploadBytes(
   //         ref(storage, `images/${e.target.files[0].name}`),
   //         encodeFileToBase64(e.target.files[0])
   //      );
   //      const file_url = await getDownloadURL(uploaded_file.ref);
   //      file_link.current = { url: file_url };
   //   };

   return (
      <>
         <Header />
         <Container>
            <Card>
               <Form>
                  <ButtonUpload onClick={addPostAxios}>업로드</ButtonUpload>
                  <TimePosted>{timePosted}</TimePosted>
                  <br />
                  <Title>Title</Title>
                  <Input
                     ref={title}
                     type="text"
                     placeholder="제목을 입력하세요."
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
                     placeholder="내용을 입력하세요."
                  />
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
   top: 50%;
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
   bottom: 25px;
   float: right;
   width: 65px;
   height: 27px;
   margin: 5px 10px;
   padding: 5px;
   align-items: center;
   justify-content: center;
   margin: 0 5px;
   padding: 6px 10px;
   color: #000;
   background-color: #e0e0e0;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
   cursor: pointer;
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
const TimePosted = styled.div`
   display: inline;
   width: 190px;
   position: relative;
   bottom: 10px;
   justify-content: center;
   font-size: 13px;
   color: #ea9cc3;
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
   display: none;
   width: 100px;
   max-height:40px;
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
   cursor: pointer;
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
   }
`;
export default AddPost;
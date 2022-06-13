import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//    faTrash,
//    faHeart,
//    faPenToSquare,
// } from '@fortawesome/free-solid-svg-icons';
/*COMPONENTS*/
import UploadBtn from './UploadBtn';
import styled from 'styled-components';
import axios from 'axios';


const PostList = () => {

   const title = useState();
   const content = useState();
   const [list, setList] = useState([]);
   
   
   // const is_login = true;
   // const [tag, setTag] = React.useState('');
   // const tag_ref = React.useRef(null);
   React.useEffect(()=> {
      getPostListAxios();
   }, []);

   
   const getPostListAxios = () => {
      axios.get('http://15.164.164.17/api/boards').then((response) => {
         setList([...response.data.boards]);

         console.log('response?', response.data.boards);
      });
   // .then(function (response) {
   //    alert('Add Post');
   //    console.log(response);
   // })
   // .catch(function (error) {
   //    console.log(error.response.data.errorMessage);
   // });

   };
   return (
      <>

         <Container>
            {list.map((data, index) => {
               return (
                  <Card key={index}>
                     {/* <button onClick={getPostListAxios}>response</button> */}
                     {/* <ButtonBox>
                        <FontAwesomeIcon icon="faRegular faPenToSquare" />
                        <FontAwesomeIcon icon="faRegular faHeart" />
                        <FontAwesomeIcon
                           icon="faRegular faTrash"
                           className="fa-lg"
                        />
                     </ButtonBox> */}
                     <Form>
                        <Title>{list[index].title}</Title>
                        <Time>Posted: 2022-06-11</Time>
                        <Img src={list[index].img}></Img>
                        <WhoPosted>someone</WhoPosted>
                        <Content>{list[index].content}</Content>
                     </Form>
                  </Card>
               );
            })}
         </Container>
         <UploadBtn />
      </>
   );
}
const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, 420px);
   gap: 3em;
   width: 100%;
   justify-content: center;
   align-items: center;
   margin: 20px auto;
   padding: auto;
   position: relative;
   top: 100px;
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
`;
 const Form = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: relative;
   left: 27px;
`;
const Title = styled.h2`
   position: relative;
   right: 20px;
`;
const Time = styled.p`
   font-size: 15px;
   font-weight: 300;
   position: relative;
   bottom: 10px;
   right: 27px;
   text-align: right;
`;
const Img = styled.img`
   max-width: 550px;
   position: relative;
   right: 27px;
   justify-content: center;
   align-items: center;
`;
const WhoPosted = styled.p`
   position: relative;
   right: 10px;
   font-weight: bold;
   text-align: right;
   margin: 20px;
`;
const Content = styled.p`
   margin: 5px auto;
   position: relative;
   right: 25px;
`;
const ButtonBox = styled.div`
   text-align: right;
`;
const Button = styled.button`
    text-align: right;
    margin: 3px;
    border: 1px solid transparent;
    border-radius: 5px;
`;
export default PostList;
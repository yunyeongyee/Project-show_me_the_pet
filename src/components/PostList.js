import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTrash,
   faHeart,
   faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';



/*COMPONENTS*/
import UploadBtn from './UploadBtn';



const PostList = () => {
   const PostedList = useSelector((state) => state.post.list);
   const is_login = true;
    const [tag, setTag] = React.useState('');
    const tag_ref = React.useRef(null);



         // const getPostListAxios = () => {
         //    console.log('DataList?', DataList)
         //    axios.get('http://localhost:5001/list').then((response) => {
         //       console.log(response);
         //    });

         // };
   return (
      <>
         <Container>
            {PostedList.map((data, index) => {
               return (
                  <Card key={index}>
                     <ButtonBox>
                        <Button>수정</Button>
                        <Button>삭제</Button>
                        {/* <FontAwesomeIcon icon="faRegular faPenToSquare" />
                        <FontAwesomeIcon icon="faRegular faHeart" />
                        <FontAwesomeIcon
                           icon="faRegular faTrash"
                           className="fa-lg"
                        /> */}
                     </ButtonBox>
                     <Form>
                        <Title>Lorem Ipsum</Title>
                        <Time>Posted: 2022-06-11</Time>
                        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnOYaZZWiwAv2Q0zX7GNvrKqCWF3Uh6fDUiJTJikmYun0iShkU0nZx6cJNDIn7ikkNKA&usqp=CAU" />
                        <WhoPosted>someone</WhoPosted>
                        <Content>
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been the
                           industry's standard dummy text ever since the 1500s,
                           when an unknown printer took a galley of type and
                           scrambled it to make a type specimen book.
                        </Content>
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
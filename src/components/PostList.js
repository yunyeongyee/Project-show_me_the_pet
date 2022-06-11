import React, {useState} from 'react';
import styled from 'styled-components';

/*COMPONENTS*/
/*CSS*/

const PostList =(props) => {

   return (
      <>
         <CardContainer>
            <Card>
               <button>Delete</button>
               <Img src="http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png" />
               <h2>Learn React</h2>
               <WhoPosted>Posted: someone</WhoPosted>
               <Content>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
               </Content>
            </Card>
         </CardContainer>
      </>
   );
}
const CardContainer = styled.div`
`;
const Card = styled.div`
   display: flex;
   flex-direction: column;
   overflow: hidden;
   margin: 0;
   padding: 20px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   vertical-align: middle;
   max-width: 500px;
   border: 1px solid #e0e0e0;
   border-radius: 5px;
   box-shadow: 0 2px 20px 2px #e0e0e0;
   background: #e0e0e0;
   color: #444;
   transition: all 0.2s ease-in-out;
   backface-visibility: hidden;
   &:hover {
      box-shadow: 0 2px 20px 6px #e0e0e0;
      
      transform: scale(1.1)
      cursor: pointer;
   }
`;
const Img = styled.img`
   border-radius: 5px;
`;
const WhoPosted = styled.p`
display: flex;

`
const Content = styled.div`
`;
export default PostList;


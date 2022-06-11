<<<<<<< HEAD
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

=======
import * as React from 'react';
import styled from 'styled-components';
/*COMPONENTS*/
import HeaderLogin from './HeaderLogin';
/*CSS*/
import './PostList.css';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PostList = () => {
   const cards = [1, 2, 3, 4, 5];
   const theme = createTheme();
   return (
      <>
         <HeaderLogin />
         <ThemeProvider theme={theme}>
            <main>
               {/* Hero unit */}
               <Box
                  sx={{
                     bgcolor: 'background.paper',
                     pt: 8,
                     pb: 6,
                  }}
               >
                  <Container maxWidth="sm">
                     <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                     >
                        Album layout
                     </Typography>

                     <Typography variant="h5" align="center" paragraph>
                        Something short and leading about the collection
                        below—its contents, the creator, etc. Make it short and
                        sweet, but not too short so folks don&apos;t simply skip
                        over it entirely.
                     </Typography>
                     <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                     ></Stack>
                  </Container>
               </Box>

               <Container sx={{ py: 8 }}>
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                     {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                           <Card
                              sx={{
                                 width: 400,
                                 display: 'flex',
                                 flexDirection: 'column',
                              }}
                           >
                              <CardMedia
                                 component="img"
                                 image="https://source.unsplash.com/random"
                                 alt="random"
                              />
                              <CardContent sx={{ flexGrow: 1 }}>
                                 <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                 >
                                    Heading
                                 </Typography>
                                 <Typography>
                                    This is a media card. You can use this
                                    section to describe the content.
                                 </Typography>
                              </CardContent>
                           </Card>
                        </Grid>
                     ))}
                  </Grid>
               </Container>
            </main>
         </ThemeProvider>
      </>
   );
}
export default PostList;
>>>>>>> f550fd470d459b426693534b1821acdcab18795e

import * as React from 'react';
import styled from 'styled-components';
/*COMPONENTS*/
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

function PostList() {
   return (
      <Typography variant="body2"  align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://mui.com/">
            Your Website
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar className="Toolbar">
               <Typography className="Typography" noWrap>
                  <h2>쇼미더펫</h2>
               </Typography>
               <button className="Button">
                  <h4>로그아웃</h4>
               </button>
            </Toolbar>
         </AppBar>
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
                     Something short and leading about the collection below—its
                     contents, the creator, etc. Make it short and sweet, but
                     not too short so folks don&apos;t simply skip over it
                     entirely.
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
                                 This is a media card. You can use this section
                                 to describe the content.
                              </Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                  ))}
               </Grid>
            </Container>
         </main>
      </ThemeProvider>
   );
}


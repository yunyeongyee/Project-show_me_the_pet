import * as React from 'react';
import styled from 'styled-components';
/*COMPONENTS*/
/*CSS*/
import './HeaderLogin.css';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const HeaderLogin = () => {
   const theme = createTheme();
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar className="Toolbar">
               <Typography className="Typography" noWrap>
                  <h2>쇼미더펫</h2>
               </Typography>
               <button className="Button">로그아웃</button>
            </Toolbar>
         </AppBar>
      </ThemeProvider>
   );
}
export default HeaderLogin;
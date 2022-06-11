import * as React from 'react';
import {useNavigate} from 'react-router-dom';
/*CSS*/
import './Header.css';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const HeaderLogin = () => {
   const navigate = useNavigate();
   const theme = createTheme();
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar className="Toolbar">
               <h2 className="Typography">
                  쇼미더펫
               </h2>
               <button className="BtnLogout">로그아웃</button>
            </Toolbar>
         </AppBar>
      </ThemeProvider>
   );
}
export default HeaderLogin;

import './App.css';
import Box from '@mui/material/Box';
import  CssBaseline  from '@mui/material/CssBaseline';
import React from 'react';
import Header from './components/Header';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Tagcor from './components/Tagcor';
import Firstsec from './components/Firstsec';
import Lastsec from './components/Lastsec';



function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          height:'13vh',
        }}>
          
          <Header/>
         
          
        </Box>
        <Firstsec/>
        <Tagcor/>
        <Lastsec/>
          
    </React.Fragment>
  );
}

export default App;

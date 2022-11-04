import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './Logo';
import ProfileSettings from './ProfileSettings';
import { flexBetweenCenter,dFlex } from '../themes/commonStyles';

const Header = () => {
  return (
    <Box
    sx={{
        ...dFlex,
        minHeight:35,
        borderBottom:'1px solid #ddd',
    }}>
    <Container maxWidth="xl">
          <Box sx={{
             ...flexBetweenCenter,
             minHeight:35,
             px:4,
          }}>
             <Logo/>
             <ProfileSettings/>
          </Box>
    </Container>
    </Box>
  );
};

export default Header;
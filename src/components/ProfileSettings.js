import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';



const ProfileSettings = () => {
  return (
      <Box sx={flexCenter}>
          <Link href="#">
            Become a Host
          </Link>
          <Stack>
            <Button>
                <BsGlobe size={20}/>
            </Button>
            <Button sx={{
                borderRadius:10,border:'1px solid #ddd'
            }}>
              <Stack>
                <AiOutlineMenu size={20}/>
                <FaRegUserCircle size={20}/>
              </Stack>
            </Button>
          </Stack>
      </Box>
  );
};

export default ProfileSettings;

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Drawer from '../component/Drawer/Drawer';

const Mobile = () => {
  return (
    <AppBar Position="sticky" sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {' '}
          <Typography sx={{ color: '#5C5C5C' }}>
            <Drawer />
          </Typography>
        </Box>
        <Box>
          {' '}
          <Typography
            sx={{
              fontFamily: 'Nunito',
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Dribble
          </Typography>
        </Box>
        <Box>
          <Button variant="text" size="small" sx={{ color: '#5C5C5C' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
              }}
            >
              <Typography>Sign In</Typography>
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Mobile;

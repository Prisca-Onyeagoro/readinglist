import { Box } from '@mui/material';
import pexels from './pexels.mp4';
import React from 'react';

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: 5,
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'red',
        position: 'relative',
      }}
    >
      <video src={pexels} muted autoPlay loop style={{ width: '100%' }} />
    </Box>
  );
};

export default Home;

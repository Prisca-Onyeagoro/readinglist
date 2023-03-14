import React from 'react';
import Appbar from './Components/Appbar';
import Home from './Components/Home';
import { Box } from '@mui/material';

const App = () => {
  return (
    <>
      <Appbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Home />
      </Box>
    </>
  );
};

export default App;

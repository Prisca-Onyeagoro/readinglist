import React from 'react';
import { Box } from '@mui/material';
import Appbar from './Components/AppBar/Appbar';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <Appbar />
      <Box>
        <Home />
      </Box>
    </>
  );
};

export default App;

import React, { useState } from 'react';
import Appbar from './Components/Appbar';
import Home from './Components/Home';
import { Box } from '@mui/material';
import Modal from './Components/Modal';

const App = () => {
  const [modal, ShowModal] = useState(true);
  return (
    <>
      <Appbar />
      <Modal modal={modal} ShowModal={ShowModal} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Home ShowModal={ShowModal} />
      </Box>
    </>
  );
};

export default App;

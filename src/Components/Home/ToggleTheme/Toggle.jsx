import { Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import { Themecontext } from '../../Context/ThemeContext';

const Toggle = () => {
  const { toggleTheme } = useContext(Themecontext);
  const toggle = toggleTheme;

  return (
    <>
      <Box>
        <Button variant="text" onClick={toggle}>
          Toggle
        </Button>
      </Box>
    </>
  );
};

export default Toggle;

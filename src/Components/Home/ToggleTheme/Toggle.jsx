import { Box, Button } from '@mui/material';
import React from 'react';
import { Themecontext } from '../../Context/ThemeContext';

const Toggle = () => {
  return (
    <Themecontext.Consumer>
      {(context) => {
        const { toggleTheme } = context;
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
      }}
    </Themecontext.Consumer>
  );
};

export default Toggle;

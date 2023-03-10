import React from 'react';
import { Box, Button } from '@mui/material';
import { pink } from '@mui/material/colors';

const Bottom = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: pink[500],
          '&:hover': {
            backgroundColor: pink[500],
          },
        }}
      >
        Sign up to continue
      </Button>
      <Button
        sx={{
          '&:hover': {
            backgroundColor: 'none',
          },
        }}
      >
        or Sign in
      </Button>
    </Box>
  );
};

export default Bottom;

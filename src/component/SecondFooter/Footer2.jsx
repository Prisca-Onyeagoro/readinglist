import { Box } from '@mui/material';
import Sports from '@mui/icons-material/SportsBasketballOutlined';
import React from 'react';
import { pink } from '@mui/material/colors';

const Footer2 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        padding: 10,
      }}
    >
      <Box>&copy;2023 Dribble. All rights reserved</Box>
      <Box>
        20,885,758 shots dribbbled <Sports sx={{ color: pink[500] }} />
      </Box>
    </Box>
  );
};

export default Footer2;

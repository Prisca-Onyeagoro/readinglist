import React from 'react';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { pink } from '@mui/material/colors';

const StyledBox = styled(Stack)(({ theme }) => ({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  textAlign: 'center',
  [theme.breakpoints.down('up')]: {
    display: 'none',
  },
}));

const Mobile = () => {
  return <Box>Mobile</Box>;
};

export default Mobile;

import { Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const Base = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        component={motion.div}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Typography>Step1: Choose Your Base</Typography>
        <Divider />
        <Stack direction="column">
          <Divider sx={{ width: 20 }} />
          <Typography>Classic</Typography>
          <Typography>Thick and Crispy</Typography>
          <Typography>Thick crust</Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Base;

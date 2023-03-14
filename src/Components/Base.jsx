import { Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const Variant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const Base = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        component={motion.div}
        variants={Variant}
        initial="hidden"
        animate="visible"
      >
        <Typography>Step1: Choose Your Base</Typography>
        <Divider />
        <Stack direction="column">
          <Divider sx={{ width: 20 }} />
          <Typography
            component={motion.div}
            whileHover={{ scale: 1.2, originX: 0, color: 'yellow' }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Classic
          </Typography>
          <Typography
            component={motion.div}
            whileHover={{ scale: 1.2, originX: 0, color: 'yellow' }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Thick and Crispy
          </Typography>
          <Typography
            component={motion.div}
            whileHover={{ scale: 1.2, originX: 0, color: 'yellow' }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            Thick crust
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Base;

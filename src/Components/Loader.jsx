import React from 'react';
import './mdeia/Modal.css';
import SportsSoccer from '@mui/icons-material/SportsSoccer';
import { motion, useCycle } from 'framer-motion';
import { Box, Button, IconButton } from '@mui/material';
const loader = {
  animate1: {
    x: [20, -20],
    y: [0, 20],
    transition: {
      x: { repeatType: 'mirror', repeat: Infinity, duration: 0.5 },
      y: { repeatType: 'mirror', repeat: Infinity, duration: 0.25 },
    },
  },
  animate2: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeatType: 'mirror',
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = () => {
  const [animation, cycle] = useCycle('animate1', 'animate2');

  return (
    <>
      <Box>
        <IconButton
          component={motion.div}
          variants={loader}
          animate={animation}
        >
          <SportsSoccer sx={{ fontSize: 49, color: 'red' }} />
        </IconButton>
      </Box>
      <Button onClick={() => cycle()} sx={{ m: 15 }}>
        Cycle loader
      </Button>
    </>
  );
};
// variants={loader} animate="animate1"
export default Loader;

import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: 'blue',
    transition: {
      repeatType: 'mirror',
      repeat: Infinity,
      duration: 0.7,
    },
  },
};
const Home = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 4000);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 15,
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <Box>
          {' '}
          <Typography
            variant="h4"
            animate={{ fontSize: 50, fontWeight: 'bold', x: 100, y: -100 }}
            component={motion.div}
          >
            BURGER JOINTss
          </Typography>
        </Box>
        <Box>
          <Paper
            sx={{
              borderRadius: 5,
              width: 150,
              padding: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
            component={motion.div}
            variants={buttonVariants}
            whileHover="hover"
          >
            <Button variant="text" component={Link} to="/base">
              <Typography>Create A Bugger</Typography>
            </Button>
          </Paper>
        </Box>
        <AnimatePresence>
          {show && (
            <Button variant="text" component={motion.div} exit={{ y: -1000 }}>
              <Typography>Up I GO WHEEEEEEEEEEEEEE</Typography>
            </Button>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};

export default Home;

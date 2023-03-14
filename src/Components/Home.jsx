import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
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
            animate={{ fontSize: 50, color: 'red', x: 100, y: -100 }}
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
          >
            <Button variant="text" component={Link} to="/base">
              <Typography
                component={motion.div}
                whileHover={{ scale: 1.1, backgroundColor: 'blue' }}
              >
                Click
              </Typography>
            </Button>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Paper, Typography } from '@mui/material';
import './mdeia/Modal.css';
import { Link } from 'react-router-dom';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const box = {
  visible: {
    opacity: 1,
    y: '90px',
    transition: { delay: 0.8 },
  },
  hidden: { opacity: 0, y: '-100vh' },
};

const Modal = ({ modal, ShowModal }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {modal && (
          <Box
            component={motion.div}
            // className="backdrop"
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
            variants={backdrop}
            animate="visible"
            initial="hidden"
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: 20,
              }}
              component={motion.div}
              variants={box}
            >
              <Paper
                sx={{
                  width: 300,
                  height: 80,
                  p: 5,
                  zIndex: 1,
                  borderRadius: 10,
                }}
              >
                <Typography fontWeight="bold">
                  welcome to our page we love to have you more often
                </Typography>
                <Typography fontWeight="bold">
                  <Link to="/base">Base</Link>
                </Typography>
              </Paper>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;

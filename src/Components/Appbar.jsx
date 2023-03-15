import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from './mdeia/Logo.svg';
import { easeInOut, motion } from 'framer-motion';
const SVG = {
  visible: { rotate: 0, transition: { duration: 2 } },
  hidden: {
    rotate: 50,
  },
};
const path = {
  visible: {
    opacity: 1,
    pathLength: 1,
    stroke: 'black',

    transition: { duration: 3, ease: easeInOut },
  },
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
};

const Appbar = () => {
  return (
    <AppBar position="sticky" sx={{ background: 'blue' }}>
      <Toolbar>
        <Box>
          <motion.svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            color="white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={SVG}
            animate="visible"
            initial="hidden"
          >
            <motion.path
              d="M15.8571 12C15.8571 14.1303 14.1302 15.8572 12 15.8572C9.86972 15.8572 8.14282 14.1303 8.14282 12C8.14282 9.86979 9.86972 8.14288 12 8.14288C14.1302 8.14288 15.8571 9.86979 15.8571 12ZM15.8571 12L15.8571 13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 9.3345 19.8412 6.93964 18 5.29168M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={path}
              animate="visible"
              initial="hidden"
            />
          </motion.svg>
        </Box>
        <Box
          component={motion.div}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.1,
            duration: 1,
            type: 'spring',
            stiffness: 120,
          }}
        >
          {' '}
          <Typography>BURGER JOINT</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

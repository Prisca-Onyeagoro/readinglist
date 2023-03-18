import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Tabed } from '../Data/Data';
import { motion, useScroll, useSpring } from 'framer-motion';
import Drawer from '../Drawer/Drawer';

const variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    stroke: 'black',
    transition: { duration: 8, ease: 'easeInOut' },
  },
};
const Bvariant = {
  hidden: { y: '-200vh' },
  visible: {
    y: 0,
    transition: { duration: 4, delay: 0.3, type: 'spring' },
  },
};

const Appbar = () => {
  const [value, setValue] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const handlechange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
        position="sticky"
      >
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'brown',
            transformOrigin: '0%',
            scaleX,
          }}
        />
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                <motion.svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  color="white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M15.8571 12C15.8571 14.1303 14.1302 15.8572 12 15.8572C9.86972 15.8572 8.14282 14.1303 8.14282 12C8.14282 9.86979 9.86972 8.14288 12 8.14288C14.1302 8.14288 15.8571 9.86979 15.8571 12ZM15.8571 12L15.8571 13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 9.3345 19.8412 6.93964 18 5.29168M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    variants={variants}
                    animate="visible"
                    initial="hidden"
                  />
                </motion.svg>
              </Typography>
            </Box>

            <Box sx={{ display: { sm: 'none', md: 'flex', xs: 'none' } }}>
              <Tabs
                value={value}
                onChange={handlechange}
                scrollButtons={false}
                TabIndicatorProps={{ style: { backgroundColor: 'brown' } }}
              >
                {Tabed.map((tab) => {
                  return (
                    <Tab
                      key={tab.id}
                      icon={tab.text}
                      sx={{
                        '&.Mui-selected': {
                          color: 'black',
                        },
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}
                    />
                  );
                })}
              </Tabs>
            </Box>
            <Box sx={{ display: { sm: 'flex', md: 'none', xs: 'flex' } }}>
              <Typography
                sx={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}
              >
                LOGO
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                component={motion.div}
                variants={Bvariant}
                animate="visible"
                initial="hidden"
                sx={{
                  display: { sm: 'none', md: 'flex', xs: 'none' },

                  color: 'black',
                  borderRadius: 9,
                  borderColor: 'brown',
                  '&:hover': {
                    backgroundColor: 'brown',
                    color: 'white',
                    borderColor: 'brown',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  Contact us
                </Typography>
              </Button>
              <Button sx={{ display: { sm: 'flex', md: 'none', xs: 'flex' } }}>
                <IconButton>
                  <Drawer />
                </IconButton>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Appbar;

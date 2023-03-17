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
import { brown } from '@mui/material/colors';

const Appbar = () => {
  const [value, setValue] = useState(0);
  const handlechange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
        position="sticky"
      >
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                FORMI
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
                <IconButton>Harm</IconButton>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Appbar;

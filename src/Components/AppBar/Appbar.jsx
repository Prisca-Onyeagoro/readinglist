import {
  AppBar,
  Box,
  Button,
  Container,
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
      <AppBar sx={{ backgroundColor: 'transparent' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                FORMI
              </Typography>
            </Box>
            <Box>
              <Tabs
                value={value}
                onChange={handlechange}
                scrollButtons={false}
                TabIndicatorProps={{ style: { backgroundColor: brown[500] } }}
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
            <Box>
              <Button
                variant="outlined"
                sx={{
                  color: 'black',
                  borderRadius: 9,
                  borderColor: brown[500],
                }}
              >
                Contact us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Appbar;

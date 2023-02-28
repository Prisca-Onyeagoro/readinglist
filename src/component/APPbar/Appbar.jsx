import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { NavbarIcons } from '../Data/Data';
import { pink } from '@mui/material/colors';

const Appbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar p={5}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Nunito',
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Dribble
          </Typography>
        </Box>
        <Stack direction="row" ml={3}>
          {NavbarIcons.map((Nav) => {
            return (
              <Box key={Nav.id} display="flex">
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: '#5C5C5C', fontWeight: 'bold' }}
                >
                  {Nav.text}
                </Button>
              </Box>
            );
          })}
        </Stack>
        <Box>
          <Stack direction="row" spacing={1} ml={60}>
            <Button>
              <ManageSearch size={24} sx={{ color: '#5C5C5C' }} />
            </Button>
            <Button variant="text" size="small" sx={{ color: '#5C5C5C' }}>
              Sign In
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                color: 'white',
                backgroundColor: pink[500],
                '&.MuiButtonBase-root:hover': {
                  bgcolor: pink[500],
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

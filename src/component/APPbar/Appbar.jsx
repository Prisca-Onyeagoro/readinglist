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
import YoutubeSearched from '@mui/icons-material/YoutubeSearchedFor';
import { NavbarIcons } from '../Data/Data';
import { pink } from '@mui/material/colors';

const Appbar = () => {
  return (
    <AppBar sx={{ backgroundColor: 'white', maxWidth: '100%' }}>
      <Toolbar>
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
            <Button variant="text">
              <YoutubeSearched size={24} sx={{ color: '#5C5C5C' }} />
            </Button>
            <Button variant="text" size="small" sx={{ color: '#5C5C5C' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'none',
                }}
              >
                <Typography>Sign In</Typography>
              </Box>
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                color: 'white',
                borderRadius: 3,
                backgroundColor: pink[500],
                '&.MuiButtonBase-root:hover': {
                  bgcolor: pink[500],
                },
                textTransform: 'none',
              }}
            >
              <Typography sx={{ padding: 1 }}>Sign up</Typography>
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

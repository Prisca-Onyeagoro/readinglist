import React from 'react';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import ManageSearch from '@mui/icons-material/ManageSearch';
import YoutubeSearched from '@mui/icons-material/YoutubeSearchedFor';
import { NavbarIcons } from '../Data/Data';
import { pink } from '@mui/material/colors';

const StyledBox = styled(Box)(({ theme }) => ({}));

const Appbar = () => {
  return (
    <AppBar Position="sticky" sx={{ backgroundColor: 'white' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <StyledBox
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
          </StyledBox>
          <StyledBox>
            <Stack direction="row">
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
          </StyledBox>
        </Stack>
        <StyledBox>
          <Stack direction="row" spacing={1}>
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
        </StyledBox>{' '}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

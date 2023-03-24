import React, { useContext } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Booklist from '../Home/Booklist/Booklist';
import { Themecontext } from '../Context/ThemeContext';
import Toggle from '../Home/ToggleTheme/Toggle';
import { AuthContext } from '../Context/AuthContext';
import BookContexrProvider from '../Context/BookContext';
import BookContextProvider from '../Context/BookContext';
import ToggleForm from '../Home/Booklist/ToggleForm';

const Appbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { LightTheme, Dark, Light } = useContext(Themecontext);
  const theme = LightTheme ? Light : Dark;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 22,
        }}
      >
        <Paper
          sx={{
            width: 500,
            height: 430,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            overFlow: 'scroll',
            boxShawdow: 'black',
            borderRadius: 10,
            backgroundColor: theme.bg,
          }}
        >
          <Box
            sx={{
              marginBottom: 7,
              marginLeft: 2,
              backgroundColor: theme.ui,
              color: theme.syntax,
              width: 450,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: theme.syntax }}
              >
                Context Api
                <Typography onClick={toggleAuth} sx={{ cursor: 'pointer' }}>
                  {isAuthenticated ? 'Logged in' : 'Logged Out'}
                </Typography>
              </Typography>
              <Toggle />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 4,
                padding: 3,
              }}
            >
              <Typography sx={{ fontWeight: 'bold', color: theme.syntax }}>
                Home
              </Typography>
              <Typography sx={{ fontWeight: 'bold', color: theme.syntax }}>
                Contact
              </Typography>
              <Typography sx={{ fontWeight: 'bold', color: theme.syntax }}>
                About
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 16,
            }}
          >
            <BookContextProvider>
              <Booklist />
            </BookContextProvider>
          </Box>
          <ToggleForm />
        </Paper>
      </Box>
    </>
  );
};

export default Appbar;

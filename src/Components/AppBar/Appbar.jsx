import { Component } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

class Appbar extends Component {
  render() {
    return (
      <AppBar
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
        position={'sticky'}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Box>
            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
              Context App
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: 'black' }}>Home</Typography>
            <Typography sx={{ color: 'black' }}>About</Typography>
            <Typography sx={{ color: 'black' }}>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Appbar;

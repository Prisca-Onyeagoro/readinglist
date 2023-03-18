import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Menu from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const Drawer = () => {
  const [open, setOpen] = React.useState(false);
  <>
    <SwipeableDrawer anchor="top" open={open} onClose={() => setOpen(false)}>
      <Box>bro</Box>
    </SwipeableDrawer>

    <IconButton>
      <Menu onClick={() => setOpen(!open)} sx={{ color: '#5C5C5C' }} />
    </IconButton>
  </>;
};

export default Drawer;

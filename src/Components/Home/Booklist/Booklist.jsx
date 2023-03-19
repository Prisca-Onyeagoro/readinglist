import { Component } from 'react';
import { Box, Stack, Typography } from '@mui/material';

class Booklist extends Component {
  render() {
    return (
      <Box display="flex" justifyContent="center">
        <Stack direction="column" spacing={3}>
          <Typography>The way of kings</Typography>
          <Typography>The name of the winds</Typography>
          <Typography>The final empire</Typography>
        </Stack>
      </Box>
    );
  }
}

export default Booklist;

import { Component } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Themecontext } from '../../Context/ThemeContext';

class Booklist extends Component {
  render() {
    return (
      <Themecontext.Consumer>
        {(context) => {
          const { LightTheme, Light, Dark } = context;
          const theme = LightTheme ? Light : Dark;

          return (
            <Box display="flex" justifyContent="center">
              <Stack direction="column" spacing={3}>
                <Paper
                  sx={{
                    width: 400,
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: theme.ui,
                  }}
                >
                  {' '}
                  <Typography sx={{ color: theme.syntax }}>
                    The way of kings
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: 400,
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: theme.ui,
                  }}
                >
                  {' '}
                  <Typography sx={{ color: theme.syntax }}>
                    The way of wind
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    width: 400,
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: theme.ui,
                  }}
                >
                  {' '}
                  <Typography sx={{ color: theme.syntax }}>
                    Final Empire
                  </Typography>
                </Paper>
              </Stack>
            </Box>
          );
        }}
      </Themecontext.Consumer>
    );
  }
}

export default Booklist;

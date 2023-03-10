import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import Sports from '@mui/icons-material/SportsBasketballOutlined';
import Facebook from '@mui/icons-material/FacebookOutlined';
const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: ' rgba(0, 0, 0, 0.1);',
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                sx={{ color: pink[500], fontSize: 24, fontWeight: 'bold' }}
              >
                Dribble
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Dribbble is the world’s leading <br />
                community for creatives to share, grow,
                <br /> and get hired.
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                <Button>Icons</Button>.
              </Typography>
            </Stack>
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

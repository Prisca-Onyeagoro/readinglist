import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import Beauty from '../Media/Beauty.jpg';
import { brown } from '@mui/material/colors';
import MidSection from '../MidSection/MidSection';

const Home = () => {
  return (
    <>
      <Box sx={{ marginTop: 10 }}>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
          alignItems="center"
        >
          <Container>
            <Divider
              sx={{
                borderBottomWidth: 5,
                backgroundColor: 'brown',
                width: { sm: '100%', xs: '100%', md: '99%' },
              }}
            />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: 40, fontWeight: 'bold' }}
              >
                Web Design Agency in Paradise
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontSize: 18, fontWeight: 'bold' }}
              >
                Working with brands all over the world
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 10,
                  borderColor: 'brown',
                  color: 'brown',
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'brown',
                    color: 'white',

                    borderColor: 'brown',
                  },
                }}
              >
                <Typography sx={{ fontSize: 18 }}>Find out more</Typography>
              </Button>
            </Box>
          </Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: { xs: 10, sm: 10, md: 0 },
            }}
          >
            <Box
              component="img"
              alt="beauty"
              src={Beauty}
              width={{ xs: '88%', sm: '88%', md: '98%' }}
              borderTop="10px solid brown"
              borderBottom="8px solid brown"
              borderRight="8px solid brown"
              borderLeft="8px solid brown"
            />
          </Box>
        </Stack>
      </Box>
      <MidSection />
    </>
  );
};

export default Home;

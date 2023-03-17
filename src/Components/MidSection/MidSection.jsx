import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

const MidSection = () => {
  return (
    <>
      <Box marginTop={7}>
        <Container>
          <Stack direction="row" spacing={{ sm: 10, xs: 8, md: 30 }}>
            <Box sx={{ borderBottom: '5px solid brown' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
                Web Design Ideas
              </Typography>
            </Box>
            <Box sx={{ borderBottom: '5px solid brown' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
                eCommerce Website
              </Typography>
            </Box>
            <Box sx={{ borderBottom: '5px solid brown' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
                Digital Agency
              </Typography>
            </Box>
          </Stack>
          <Box marginTop={4} display="flex" justifyContent="center">
            <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
              We are web design agency in Manchester who care, build
              Relationship,
              <br /> have industry experience and win website design awards
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', gap: 5, justifyContent: 'center', mt: 5 }}
          >
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
              <Typography sx={{ fontSize: 16 }}>Start now</Typography>
            </Button>
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
              <Typography sx={{ fontSize: 16 }}>Start Building</Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MidSection;

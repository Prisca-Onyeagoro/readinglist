import { Box, Typography, Video } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <>
      <Box>
        <Box>
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%',
              width: '100%',
              height: '100vh',
            }}
          >
            <video
              autoPlay
              muted
              loop
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
              }}
            >
              <source
                src="https://player.vimeo.com/external/370467553.sd.mp4?s=96de8b923370fb7fa8616d4e0b74eaf3fac9e576&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
          </Box>
          <Typography sx={{ color: 'red' }}>redl</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;

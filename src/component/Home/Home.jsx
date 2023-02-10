import React from 'react';
import { Box } from '@mui/material';
import TrackList from '../TrackList';
import { MusicplayerProvider } from '../../context/MusicPlayerContext';

const Home = () => {
  return (
    <MusicplayerProvider>
      <Box>
        <TrackList />
      </Box>
    </MusicplayerProvider>
  );
};

export default Home;

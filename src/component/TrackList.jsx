import React, { useContext } from 'react';
import { MusicPlayerContext } from '../context/MusicPlayerContext';
import { Typography } from '@mui/material';

const TrackList = () => {
  const [state, setState] = useContext(MusicPlayerContext);
  return (
    <div>
      {state.Track.map((track) => (
        <div>{track.name}</div>
      ))}
    </div>
  );
};

export default TrackList;

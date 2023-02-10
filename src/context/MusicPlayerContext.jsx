import React from 'react';
import { useState } from 'react';
import { Track } from '../component/Trackdata';
const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicplayerProvider = ({ children }) => {
  const [state, setState] = useState({ Track });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
export { MusicPlayerContext, MusicplayerProvider };

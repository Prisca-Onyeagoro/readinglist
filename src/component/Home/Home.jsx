import React from 'react';
import { Box, Paper, Tab, Tabs, Typography, styled } from '@mui/material';
import pexels from './pexels.mp4';
import { TabsIcons } from '../Data/Data';
import Tabicon from '../Tabicons/Tabicon';

const StyledBoxs = styled(Box)((theme) => {});

const Home = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box position="relative" class="video-background ">
      <video
        class="video"
        src={pexels}
        muted
        loop
        autoPlay
        type="video/mp4"
        style={{
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '80vh',
          maxHeight: '100vh',
          objectFit: 'cover',
        }}
      />
      <Box>
        <Tabicon />
      </Box>
    </Box>
  );
};

export default Home;

// import { Box, Paper, Typography } from '@mui/material';
// import pexels from './pexels.mp4';
// import './Home.css';
// import React from 'react';

// const Home = () => {
//   return (
//     <Box
//       sx={{ position: 'relative', marginTop: '50px', height: '560px' }}
//       class="video-background"
//     >
//       <video
//         style={{
//           top: 0,
//           left: 0,
//           minWidth: '100%',
//           minHeight: '100vh',
//           // objectFit: 'cover',
//         }}
//         autoplay
//         loop
//       >
//         <source
//           src="https://player.vimeo.com/progressive_redirect/playback/737844886/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=fa54186638ab9fe18e5d9265420a3381479e26e0d91dbf535b8e43fcd4ef5e04"
//           autoPlay
//           loop
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 1,
//           color: 'white',
//           textAlign: 'center',
//           padding: '5px',
//         }}
//         // class="content"
//       >
//         <Typography variant="h3">Welcome to my website</Typography>
//         <Typography variant="h3">Welcome to my website</Typography>

//         <Typography variant="body1">Some content here</Typography>
//         <Typography variant="body2">Some content here</Typography>
//         <Typography variant="body1">Some content here</Typography>
//       </Box>
//       <Box
//         // sx={{
//         //   position: 'absolute',
//         //   top: 0,
//         //   left: 0,
//         //   minWidth: '100%',
//         //   minHeight: '50vh' /* on bigger screen it is 110vh */,
//         //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         // }}
//         class="overlay"
//       ></Box>
//     </Box>
//   );
// };

// export default Home;

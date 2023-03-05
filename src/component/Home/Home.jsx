import { Box, Tab, Tabs, Typography, Video, styled } from '@mui/material';
import React from 'react';
import { TabsIcons } from '../Data/Data';
import { pink } from '@mui/material/colors';

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '900vh',
  },
}));

const Home = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const MyTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': {
      color: 'white', // change this to the desired color
    },
  }));
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <StyledBox
          sx={{
            position: 'relative',
            paddingBottom: '56.25%',
            width: '100%',
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
        </StyledBox>
        <Box
          sx={{
            top: 90,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            // scrollButtons
            scrollButtons={false}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: pink[500],
              },
              '&.Mui-selected': {
                color: 'red', // change this to the desired color
              },
              [`{& .$(tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
          >
            {TabsIcons.map((tab) => {
              return (
                <MyTab
                  key={tab.id}
                  icon={tab.text}
                  sx={{ color: 'white', backgroundColor: 'black' }}
                />
              );
            })}
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Home;

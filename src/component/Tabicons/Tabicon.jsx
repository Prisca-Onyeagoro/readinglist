import { Box, Button, Container, Tab, Tabs, styled } from '@mui/material';
import React from 'react';
import { TabsIcons } from '../Data/Data';
import { pink } from '@mui/material/colors';

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    overFlow: 'hidden',
  },
}));

const Tabicon = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledBox
      sx={
        {
          // display: 'flex',
          // px: { xs: 0, md: 2 },
          // alignItems: 'center',
          // overflowX: 'hidden',
          // m: 0,
          // mt: 2,
          // mb: 2,
        }
      }
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        TabIndicatorProps={{ style: { backgroundColor: pink[500] } }}
        sx={{
          '&.Mui-selected': {
            color: 'white',
            // backgroundColor: 'blue',
          },
        }}
      >
        {TabsIcons.map((tab) => {
          return (
            <Tab
              key={tab.id}
              icon={tab.text}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                fontWeight: 'bold',
                mx: 1,
                borderRadius: 4,
                '&.Mui-selected': {
                  color: 'black',
                  backgroundColor: 'white',
                },
              }}
            />
          );
        })}
      </Tabs>
    </StyledBox>
  );
};

export default Tabicon;

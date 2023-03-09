import { Box, styled } from '@mui/material';
import AppBar from './component/APPbar/Appbar';
import Mobile from './Mobile/Mobile';
import Home from './component/Home/Home';
import Hometag from './component/Hometag/Hometag';
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
const StyledBoxs = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
const App = () => {
  return (
    <>
      <Box>
        <Box>
          <StyledBox>
            <AppBar />
          </StyledBox>
          <StyledBoxs>
            <Mobile />
          </StyledBoxs>
        </Box>
        <Home />
        <Hometag />
      </Box>
    </>
  );
};

export default App;

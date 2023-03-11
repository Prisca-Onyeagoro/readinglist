import { Box, Divider, styled } from '@mui/material';
import AppBar from './component/APPbar/Appbar';
import Mobile from './Mobile/Mobile';
import Home from './component/Home/Home';
import Hometag from './component/Hometag/Hometag';
import Bottom from './component/BottomButton/Bottom';
import Footer from './component/Footer/Footer';
import Footer2 from './component/SecondFooter/Footer2';
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
        <Box sx={{ marginBottom: 6 }}>
          <Bottom />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;

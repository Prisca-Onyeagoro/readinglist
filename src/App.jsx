import { Box, styled } from '@mui/material';
import AppBar from './component/APPbar/Appbar';
import Mobile from './Mobile/Mobile';
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
      <StyledBox>
        <AppBar />
      </StyledBox>
      <StyledBoxs>
        <Mobile />
      </StyledBoxs>
    </>
  );
};

export default App;

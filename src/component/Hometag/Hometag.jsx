import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import Filter from '@mui/icons-material/FilterAltOutlined';
import { pink } from '@mui/material/colors';
import React from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';

const Hometag = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Popular
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Popular"
                style={{ borderRadius: '20px' }}
              >
                <MenuItem value={10}>
                  <Typography sx={{ color: pink[500], fontWeight: 'bold' }}>
                    Popular &nbsp; &nbsp; &nbsp; &nbsp;
                  </Typography>
                </MenuItem>
                <MenuItem value={21}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {' '}
                    New & NoteWorthy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem value={22}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    MarketPlace
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <Paper elevation={3} borderRadius={5} width={20}>
              <Button
                sx={{
                  display: 'flex',
                  border: '1px solid #ddd',
                  minWidth: 90,
                  justifyContent: 'space-between',
                  borderRadius: 2,
                  textTransform: 'capitalize',
                  py: 1,
                  color: 'black',
                }}
              >
                <Filter />
                Filter
              </Button>
            </Paper>
          </Box>
        </Box>
        <ImageGrid />
      </Container>
    </>
  );
};

export default Hometag;

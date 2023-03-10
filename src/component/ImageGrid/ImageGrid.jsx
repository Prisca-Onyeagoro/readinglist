import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
} from '@mui/material';
import { Image } from '../Data/Data';
import { pink } from '@mui/material/colors';
function RandFig() {
  for (let i = 300; i <= 1000; i++) {
    return i;
  }
}
const num = RandFig();
console.log(num);

const ImageGrid = () => {
  return (
    <>
      <Grid container spacing={5}>
        {Image.map((item) => {
          return (
            <>
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ maxWidth: '100%' }} elevation={0}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height={200}
                      width={200}
                      objectFit="cover"
                      image={item.Image}
                      borderRadius={4}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Stack direction={'row'}>
                          <IconButton sx={{ color: item.color }}>
                            {item.Iconlogo}
                          </IconButton>
                          <Box sx={{ display: 'flex' }}>
                            <Button variant="text" size="small">
                              {item.text2}
                            </Button>
                            <Button variant="text" size="small">
                              {item.text === 'premium' ? 'premium' : 'PRO'}
                            </Button>
                          </Box>
                        </Stack>
                        <Stack direction="row">
                          <IconButton>{item.icon1}</IconButton>
                          <IconButton>{item.icon2}</IconButton>
                        </Stack>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default ImageGrid;

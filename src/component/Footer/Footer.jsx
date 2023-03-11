import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import Sports from '@mui/icons-material/SportsBasketballOutlined';
import Facebook from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import Footer2 from '../SecondFooter/Footer2';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: ' rgba(0, 0, 0, 0.1);',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            p: 9,
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                sx={{ color: pink[500], fontSize: 24, fontWeight: 'bold' }}
              >
                Dribble
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Dribbble is the world’s leading <br />
                community for creatives to share, grow,
                <br /> and get hired.
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                <Button>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <IconButton sx={{ color: 'black' }}>
                      <Sports />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }}>
                      <Facebook />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }}>
                      <Instagram />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }}>
                      <Twitter />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }}>
                      <Pinterest />
                    </IconButton>
                  </Box>
                </Button>
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h3"
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                For designers
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Go Pro!
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Explore Design Work
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Design blog
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Overtime podcast
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Playoffs
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Weekly Warm-Up
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Refer a Friend
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Code of conduct
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h3"
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                Hire designers
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Post a job opening
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Post a freelance project
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Search for designers
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Overtime podcast
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
              >
                Brands
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Advertise with us
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h3"
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                Company
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                About
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Careers
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Support
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Media Kit
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Testimonials
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                API
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Terms of service
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Privacy policy
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Cookie policy
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h3"
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                Dictionaries
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Design jobs
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Designers for hire
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Freelance designers for hire
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Overtime podcast
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Tags
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Places
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
              >
                Design Assets
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Dribble Marketplace
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Creative Market
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Fontspring
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Font Squirrel
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h3"
                sx={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}
              >
                Design Resources
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Freelancing
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Design Hiring
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Design Portfolio
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Design Education
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Creative Process
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
              >
                Places
              </Typography>
              <Typography
                sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
              >
                Design Industry Trends
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Divider />
      <Footer2 />
    </Box>
  );
};

export default Footer;

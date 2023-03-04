import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  SwipeableDrawer,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import MenuOpen from '@mui/icons-material/MenuOpen';
import ManageSearch from '@mui/icons-material/ManageSearch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <SwipeableDrawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Paper sx={{ width: '100%' }}>
          <Typography
            color="black"
            sx={{
              fontFamily: 'cursive',
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Dribble
          </Typography>
          <Divider />
        </Paper>
        <Box sx={{ overflowX: 'hidden' }}>
          <Paper
            component={'form'}
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              border: '1px solid #ddd',
              borderRadius: 20,
            }}
          >
            <IconButton sx={{ p: '10px' }}>
              <ManageSearch />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
            <IconButton type="submit" sx={{ p: '10px' }}>
              <ManageSearch />
            </IconButton>
          </Paper>
        </Box>
        <Stack spacing={2}>
          <Box>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#978F8D', fontSize: 20 }}>
                  Inspiration
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction="column"
                  // divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Item elevation={0}>
                    <Typography>Explore Work Design</Typography>
                  </Item>
                  <Item elevation={0}>New & Noteworthy</Item>
                  <Item elevation={0}>Playoffs</Item>
                  <Item elevation={0}>Blog</Item>
                  <Item elevation={0}>Weekly Warmup</Item>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#978F8D', fontSize: 20 }}>
                  Find Work
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction="column"
                  // divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Item elevation={0}>
                    <Typography>Explore Work Design</Typography>
                  </Item>
                  <Item elevation={0}>Job Board</Item>
                  <Item elevation={0}>Freelance Projects</Item>
                  <Item elevation={0}>Want Freelance Design Projects?</Item>
                  <Item elevation={0}>Personalize Your Profile With Video</Item>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#978F8D', fontSize: 20 }}>
                  Go Pro
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction="column"
                  // divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Item elevation={0}>For Designers</Item>
                  <Item elevation={0}>For Freelancers</Item>
                  <Item elevation={0}>For Teams</Item>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#978F8D', fontSize: 20 }}>
                  Learn Design
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction="column"
                  // divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Item elevation={0}>Certified Product Design Course</Item>
                  <Item elevation={0}>Introduction to UI Design </Item>
                  <Item elevation={0}>Design System Course</Item>
                  <Item elevation={0}>Design Career Prep Course</Item>
                  <Item elevation={0}>
                    Browse Our Collections And WorkShops
                  </Item>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#978F8D', fontSize: 20 }}>
                  Hire Designers
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Stack
                    direction="column"
                    // divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <Item elevation={0}>About Dribble Hiring</Item>
                    <Item elevation={0}>Designers Search</Item>
                    <Item elevation={0}>List My Job Opening</Item>
                    <Item elevation={0}>Post a Freelance Project</Item>
                  </Stack>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Stack>
      </SwipeableDrawer>

      <IconButton>
        <MenuOpen onClick={() => setOpen(!open)} sx={{ color: '#5C5C5C' }} />
      </IconButton>
    </>
  );
};

export default Drawer;

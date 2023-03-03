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
} from '@mui/material';
import React, { useState } from 'react';
import MenuOpen from '@mui/icons-material/MenuOpen';
import ManageSearch from '@mui/icons-material/ManageSearch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Drawer = () => {
  const [open, setOpen] = useState(false);

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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
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

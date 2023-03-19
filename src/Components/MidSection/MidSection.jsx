import React, { useEffect, useRef } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion, useScroll, useSpring, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const box = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const MidSection = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      <Box marginTop={7} component={motion.div} ref={ref}>
        <Container
          style={{
            transform: inView ? 'none' : 'translateX(-200px)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Stack direction="row" spacing={{ sm: 10, xs: 8, md: 30 }}>
            <Box sx={{ borderBottom: '5px solid brown' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
                Web Design Ideas
              </Typography>
            </Box>
            <Box sx={{ borderBottom: '5px solid brown' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
                eCommerce Website
              </Typography>
            </Box>
            <Box sx={{ borderBottom: '5px solid brown' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
                Digital Agency
              </Typography>
            </Box>
          </Stack>
          <Box marginTop={4} display="flex" justifyContent="center">
            <Typography sx={{ fontWeight: 'bold', fontSize: 19 }}>
              We are web design agency in Manchester who care, build
              Relationship,
              <br /> have industry experience and win website design awards
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', gap: 5, justifyContent: 'center', mt: 5 }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 10,
                borderColor: 'brown',
                color: 'brown',
                px: 2,
                '&:hover': {
                  backgroundColor: 'brown',
                  color: 'white',

                  borderColor: 'brown',
                },
              }}
            >
              <Typography sx={{ fontSize: 16 }}>Start now</Typography>
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 10,
                borderColor: 'brown',
                color: 'brown',
                px: 2,
                '&:hover': {
                  backgroundColor: 'brown',
                  color: 'white',

                  borderColor: 'brown',
                },
              }}
            >
              <Typography sx={{ fontSize: 16 }}>Start Building</Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MidSection;

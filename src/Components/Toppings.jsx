import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Variants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
    whileHover: {
      scale: 1.2,
    },
  },
};

const Toppings = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <Box>
        <Box>
          <Button variant="text" onClick={() => setValue(true)}>
            order
          </Button>
        </Box>

        <Box>
          {value === false ? (
            ''
          ) : (
            <Button
              variant="outlined"
              sx={{ color: 'black', borderRadius: 13 }}
              component={motion.div}
              variants={Variants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.3 }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Toppings;

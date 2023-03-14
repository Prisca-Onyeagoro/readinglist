import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.1 }}
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

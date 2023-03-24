import { useContext } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Themecontext } from '../../Context/ThemeContext';
import { BookContext } from '../../Context/BookContext';

const Booklist = () => {
  const { LightTheme, Light, Dark } = useContext(Themecontext);
  const { books } = useContext(BookContext);

  const theme = LightTheme ? Light : Dark;

  return (
    <Box display="flex" justifyContent="center">
      <Stack direction="column" spacing={3}>
        {books.map((book) => {
          return (
            <Paper
              sx={{
                width: 400,
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.ui,
              }}
            >
              <Typography key={book.id} sx={{ color: theme.syntax }}>
                {book.title}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Booklist;

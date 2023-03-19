import React from 'react';
import Appbar from './Components/AppBar/Appbar';
import Booklist from './Components/Home/Booklist/Booklist';
import ThemeContextProvider from './Components/Context/ThemeContext';

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Appbar />
        <Booklist />
      </ThemeContextProvider>
    </>
  );
};

export default App;

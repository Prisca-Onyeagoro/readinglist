import React from 'react';
import Appbar from './Components/AppBar/Appbar';
import ThemeContextProvider from './Components/Context/ThemeContext';
import AuthContextProvider from './Components/Context/AuthContext';

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Appbar />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;

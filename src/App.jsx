import React from 'react';
import ReadingContextProvider from './Context/ReadingContext';
import Home from './Components/Home';
import ReadingList from './Components/ReadingList';
import ReadingForm from './Components/ReadingForm';

const App = () => {
  return (
    <>
      <div className="App">
        <ReadingContextProvider>
          <Home />
          <ReadingList />
          <ReadingForm />
        </ReadingContextProvider>
      </div>
    </>
  );
};

export default App;

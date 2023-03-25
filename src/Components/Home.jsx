import React, { useContext } from 'react';
import { Readcontext } from '../Context/ReadingContext';

const Home = () => {
  const { lists } = useContext(Readcontext);
  return (
    <div className="Navbar">
      <h1>ZIDEV READING LIST</h1>
      <p>You currently have {lists.length} reading list to cover</p>
    </div>
  );
};

export default Home;

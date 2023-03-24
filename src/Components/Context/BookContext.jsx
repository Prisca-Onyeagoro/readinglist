import React, { createContext, useState } from 'react';

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'The Upper room', id: 1 },
    { title: 'Pillars Of Destinies', id: 2 },
    { title: 'Spirit Within Spirit Upon', id: 3 },
    { title: '5 Roles of leadership', id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

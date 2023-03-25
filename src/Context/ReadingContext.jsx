import React, { createContext, useReducer } from 'react';
import { ReadReducers } from '../Reducer/ReadReducers';
export const Readcontext = createContext();

const ReadingContextProvider = (props) => {
  const [lists, dispatch] = useReducer(ReadReducers, [], () => {
    const localData = localStorage.getItem('lists');
    return localData ? JSON.parse(localData) : [];
  });

  localStorage.setItem('lists', JSON.stringify(lists));

  return (
    <Readcontext.Provider value={{ lists, dispatch }}>
      {props.children}
    </Readcontext.Provider>
  );
};

export default ReadingContextProvider;

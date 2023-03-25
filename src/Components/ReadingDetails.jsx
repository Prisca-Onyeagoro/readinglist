import React from 'react';
import { useContext } from 'react';
import { Readcontext } from '../Context/ReadingContext';
import { REMOVE_BOOK } from '../Actions/ReadActions';

const ReadingDetails = ({ list }) => {
  const { dispatch } = useContext(Readcontext);
  return (
    <li onClick={() => dispatch({ type: REMOVE_BOOK, id: list.id })}>
      <div className="title">{list.title}</div>
      <div className="author">{list.author}</div>
    </li>
  );
};

export default ReadingDetails;

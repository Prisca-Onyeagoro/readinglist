import React, { useContext } from 'react';
import { Readcontext } from '../Context/ReadingContext';
import { useState } from 'react';
import { ADD_BOOK } from '../Actions/ReadActions';

const ReadingForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { dispatch } = useContext(Readcontext);

  const handle = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_BOOK,
      lists: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form onSubmit={handle}>
        <input
          type="text"
          required
          placeholder="Enter Title of Book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Enter author of the Book"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default ReadingForm;

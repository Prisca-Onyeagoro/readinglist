import React from 'react';
import { useContext } from 'react';
import { Readcontext } from '../Context/ReadingContext';
import ReadingDetails from './ReadingDetails';

const ReadingList = () => {
  const { lists } = useContext(Readcontext);
  return lists.length ? (
    <div className="book-list">
      <ul>
        {lists.map((list) => {
          return (
            <>
              <ReadingDetails list={list} />
            </>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      Time to rest or kindly add another one to read!!!! :)
    </div>
  );
};

export default ReadingList;

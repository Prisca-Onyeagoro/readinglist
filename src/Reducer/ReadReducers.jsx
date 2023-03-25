import { v5 as uuidv5 } from 'uuid';

import { ADD_BOOK, REMOVE_BOOK } from '../Actions/ReadActions';
export const ReadReducers = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.lists.title,
          author: action.lists.author,
          id: uuidv5,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((list) => list.id !== action.id);
    default:
      return state;
  }
};

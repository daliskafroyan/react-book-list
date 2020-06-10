import { v4 as uuid } from 'uuid';

export const bookReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        },
      ];

    case 'DEL_BOOK':
      return [state.filter((book) => book.id !== action.id)];

    default:
      return state;
  }
};

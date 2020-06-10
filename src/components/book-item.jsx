import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookItem = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div
      class="book-list__item"
      onClick={() => dispatch({ type: 'DEL_BOOK', id: book.id })}
    >
      <div class="book-list--title">{book.title}</div>
      <div class="book-list--subtitle">{book.author}</div>
    </div>
  );
};

export default BookItem;

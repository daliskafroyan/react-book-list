import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookItem = ({ book }) => {
  const { deleteBook } = useContext(BookContext);
  return (
    <div class="book-list__item" onClick={() => deleteBook(book.id)}>
      <div class="book-list--title">{book.title}</div>
      <div class="book-list--subtitle">{book.author}</div>
    </div>
  );
};

export default BookItem;

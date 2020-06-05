import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookItem from '../components/book-item';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div>
      <div className="book-list">
        {books.map((book) => {
          return <BookItem book={book} key={book.id} />;
        })}
      </div>
    </div>
  ) : (
    <div className="book-list">Your book list is empty, fill up some more!</div>
  );
};

export default BookList;

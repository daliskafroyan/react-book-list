import React, { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'hidden mist', author: 'asagi ooyama', id: 1 },
    { title: 'summer coral', author: 'asagi ooyama', id: 2 },
    { title: 'rainbow of trust', author: 'miyagi dasamu', id: 3 },
    { title: 'scapegoat bladder', author: 'takahashi reita', id: 4 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <BookContext.Provider value={{ books, addBook, deleteBook }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;

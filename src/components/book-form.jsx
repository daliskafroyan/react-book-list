import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };
  return (
    <div class="book-form">
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="book-form__author"
          className="book-form__author"
          placeholder="Type author here"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          name="book-form__title"
          className="book-form__title"
          placeholder="Type title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <button className="book-form__button" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;

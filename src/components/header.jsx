import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Header = () => {
  const { books } = useContext(BookContext);
  return (
    <div class="banner">
      <div class="banner__title">Morning Booklist</div>
      <div class="banner__subtitle">
        You still have {books.length} books left to read
      </div>
    </div>
  );
};

export default Header;

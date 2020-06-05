import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Header from './components/header';
import BookList from './components/book-list';
import BookForm from './components/book-form';

function App() {
  return (
    <div className="App dark">
      <BookContextProvider>
        <Header />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

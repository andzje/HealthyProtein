import React from 'react';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Nav />
        <Category />
        <Search />
        <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;

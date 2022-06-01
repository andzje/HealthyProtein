import React from 'react';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Nav />
        <Category />
        <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import Capsule from './components/Capsule';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
        <Nav />
        <BrowserRouter>
        <Category />
        <Capsule />
        <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;

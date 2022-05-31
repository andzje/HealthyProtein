import React from 'react';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import Capsule from './components/Capsule';
import Category from './components/Category';

function App() {
  return (
    <div>
        <Nav />
        <Category />
        <Capsule />
        <Pages />
    </div>
  );
}

export default App;

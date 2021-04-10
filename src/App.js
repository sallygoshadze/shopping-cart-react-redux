import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import cartItems from './data';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Cart cart={cartItems} />
    </div>
  );
}

export default App;

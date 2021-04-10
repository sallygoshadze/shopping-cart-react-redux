import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import data from './data';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Cart />
    </Provider>
  );
}

export default App;

import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home/index';
import CartContext from './utils/cartContext';

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function App() {
  return (
    <>
      <CartContext.Provider value={cartItems}>
        <GlobalStyle />
        <Home />
      </CartContext.Provider>
    </>
  );
}

export default App;

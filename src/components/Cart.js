import React from 'react';
import Item from './Item';

const Cart = ({ cart = [] }) => {
  if (cart.length === 0) {
    return (
      <div>
        <h1>EMPTY</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>orders</h1>
      <div>
        {cart.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
      <div>
        total <span>$0.00</span>
      </div>
      <button>clear</button>
    </div>
  );
};

export default Cart;

import React, { useEffect } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { CLEAR, GET_TOTALS } from "../store/actions";

const Cart = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
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
        total <span>${total}</span>
      </div>
      <button onClick={() => dispatch({ type: CLEAR })}>clear</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(Cart);

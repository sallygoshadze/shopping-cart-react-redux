import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../store/actions";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Item = ({ img, title, price, amount, remove, increase, decrease }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button onClick={() => remove()}>remove</button>
      </div>
      <div>
        <button onClick={() => increase()}>
          <BsChevronUp />
        </button>
        <p>{amount}</p>
        <button onClick={() => decrease()}>
          <BsChevronDown />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};

export default connect(null, mapDispatchToProps)(Item);

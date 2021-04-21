import React from "react";
import { connect } from "react-redux";
import { REMOVE, TOGGLE_AMOUNT } from "../store/actions";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Item = ({ img, title, price, amount, remove, toggle }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
        <button onClick={() => remove()}>remove</button>
      </div>
      <div>
        <button onClick={() => toggle("inc")}>
          <BsChevronUp />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              return remove();
            } else {
              return toggle("dec");
            }
          }}
        >
          <BsChevronDown />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    // increase: () => dispatch({ type: INCREASE, payload: { id } }),
    // decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    toggle: (toggle) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};

export default connect(null, mapDispatchToProps)(Item);

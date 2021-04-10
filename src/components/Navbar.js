import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { connect } from 'react-redux';

const Navbar = ({ amount }) => {
  return (
    <div>
      <h3>desserts</h3>
      <FiShoppingBag />
      <sup>{amount}</sup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { amount: state.amount };
};

export default connect(mapStateToProps)(Navbar);

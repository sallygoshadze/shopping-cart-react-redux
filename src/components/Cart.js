import React, { useEffect } from "react";
import { Button, Empty, PageHeader, Typography } from "antd";
import Item from "./Item";
import { connect } from "react-redux";
import { CLEAR, GET_TOTALS } from "../store/actions";

const { Text } = Typography;

const Cart = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Empty description="Your Cart Is Currently Empty" />
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <PageHeader className="cart-header" title="Your Cart" />
      <div>
        {cart.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
      <Text keyboard className="total">
        total ${total}
      </Text>
      <Button
        size="large"
        type="primary"
        danger
        onClick={() => dispatch({ type: CLEAR })}
      >
        Clear Cart
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(Cart);

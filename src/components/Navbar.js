import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { PageHeader, Badge } from "antd";

const Navbar = ({ amount }) => {
  return (
    <>
      <PageHeader className="site-page-header" title="Desserts" />
      <div className="cart">
        <Badge count={amount} size="default">
          <ShoppingOutlined
            style={{
              fontSize: "1.7rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </Badge>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { amount: state.amount };
};

export default connect(mapStateToProps)(Navbar);

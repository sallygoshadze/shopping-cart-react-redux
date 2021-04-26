import React from "react";
import { connect } from "react-redux";
import { REMOVE, TOGGLE_AMOUNT } from "../store/actions";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { List } from "antd";

const Item = ({ img, title, price, amount, remove, toggle }) => {
  const listData = [];

  listData.push({
    title: title,
    description: "Dessert",
    content: `price: $${price}`,
  });

  return (
    <List
      style={{
        width: "60vw",
        margin: "auto",
        background: "rgba(241, 241, 241, 0.7)",
      }}
      itemLayout="vertical"
      bordered={true}
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <MinusOutlined
              key="decrease"
              onClick={() => {
                if (amount === 1) {
                  return remove();
                } else {
                  return toggle("dec");
                }
              }}
            />,
            amount,
            <PlusOutlined key="increase" onClick={() => toggle("inc")} />,
            <DeleteOutlined key="remove" onClick={() => remove()} />,
          ]}
          extra={<img width={200} alt={title} src={img} />}
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
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

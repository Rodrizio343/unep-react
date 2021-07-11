import React from "react";
import { API_URL } from "config";
import { Card, Button, } from "antd";

const { Meta } = Card;

const ProductItem = ({ name, price, picture }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={`${API_URL}${picture}`} />}
    >
      <Meta title={name} description={`$${price}`} />
      <Button type="primary" block>
        <i className="fa fa-shopping-cart"></i>
      </Button>
    </Card>
  );
};

export default ProductItem;

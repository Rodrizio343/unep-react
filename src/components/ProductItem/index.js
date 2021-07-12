import React from "react";
import { API_URL } from "config";
import { Card, Button, } from "antd";
import './ProductItem.css'

const { Meta } = Card;

const ProductItem = ({ name, price, picture }) => {
  return (
    <Card
      className="cardItem"
      hoverable
      cover={<img alt={name} src={`${API_URL}${picture}`} />}
    >
      <Meta title={name} description={`$${price}`} />
      <Button type="primary" block>
        <i className="fa fa-shopping-cart"></i>
      </Button>
    </Card>
  );
};

export default ProductItem;

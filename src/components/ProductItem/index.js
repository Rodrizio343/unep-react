import React from "react";
import { Card, Button, } from "antd";
import './ProductItem.css'

const { Meta } = Card;

const ProductItem = ({ name, price, picture }) => {
  return (
    <Card
      className="cardItem"
      hoverable
      cover={<img alt={name} src={picture} />}
    >
      <Meta title={name} description={`$${price}`} />
      <Button type="primary">
        <i className="fa fa-shopping-cart"></i>
      </Button>
      <Button type="primary">Ver detalle</Button>
    </Card>
  );
};

export default ProductItem;

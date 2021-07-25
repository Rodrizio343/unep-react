import React from "react";
import { Card } from "antd";
import './ProductItem.css'
import {InfoCircleOutlined, ShoppingCartOutlined} from "@ant-design/icons"

const { Meta } = Card;

const ProductItem = ({ name, price, picture }) => {
  return (
    <Card
      className="cardItem"
      hoverable
      cover={<img alt={name} src={picture} />}
      actions={[
        <InfoCircleOutlined />,
        <ShoppingCartOutlined />
      ]}
    >
      <Meta title={name} description={`$${price}`} />
    </Card>
  );
};

export default ProductItem;

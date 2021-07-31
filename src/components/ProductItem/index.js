import React from "react";
import { Card } from "antd";
import "./ProductItem.css";
import { InfoCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/productos/carritoSlice";

const { Meta } = Card;

const ProductItem = ({ product, name, price, picture }) => {
  
  const dispatch = useDispatch();

  return (
    <Card
      className="cardItem"
      hoverable
      cover={<img alt={name} src={picture} />}
      actions={[
        <InfoCircleOutlined />,
        <ShoppingCartOutlined onClick={() => dispatch(addProduct(product))} />,
      ]}
    >
      <Meta title={name} description={`$${price}`} />
    </Card>
  );
};

export default ProductItem;

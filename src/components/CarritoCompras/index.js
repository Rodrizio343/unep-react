import React, { useState } from "react";
import { Drawer } from "antd";

const CarritoCompras = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default CarritoCompras;

import React from "react";
import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  carritoCompra,
  closeCarrito,
  showCarrito,
} from "redux/productos/carritoSlice";

const CarritoCompras = () => {
  const showCart = useSelector(showCarrito);
  const carrito = useSelector(carritoCompra);
  const dispatch = useDispatch();

const onClose = () => {
  dispatch(closeCarrito())
}

  return (
    <Drawer
      title="Tu carrito"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={showCart}
    >
      <ul>
        {!carrito
          ? carrito.map((prod) => <li>{prod.name}</li>)
          : "Carrito vacio"}
      </ul>
      <Button type='primary'>Comprar</Button>
    </Drawer>
  );
};

export default CarritoCompras;

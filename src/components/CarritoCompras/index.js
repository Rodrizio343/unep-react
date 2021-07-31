import React from "react";
import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCarrito,
  getCarrito,
  showCarrito,
} from "redux/productos/carritoSlice";
import ListItem from "components/ListItem";

const CarritoCompras = () => {
  const showCart = useSelector(showCarrito);
  const carrito = useSelector(getCarrito);
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
      width={300}
    >
      <ul style={{listStyle:'none', padding:'unset'}}>
        {carrito
          ? carrito.map((prod) => <ListItem name={prod.name} price={prod.price} picture={prod.picture[0].url} number={prod.cantidad} key={prod.id} />)
          : "Carrito vacio"}
      </ul>
      <Button type='primary'>Comprar</Button>
    </Drawer>
  );
};

export default CarritoCompras;

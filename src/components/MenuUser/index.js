import React from "react";
import useUser from "hooks/useUser";
import { Link } from "wouter";
import { Menu, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { openCarrito } from "redux/productos/carritoSlice";

const MenuUser = () => {
  const { isLogged, logout } = useUser();
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item key="cart">
        <Badge count={1}>
          <ShoppingCartOutlined style={{ fontSize: 20 }} onClick={() => dispatch(openCarrito())}/>
        </Badge>
      </Menu.Item>
      <Menu.Item key="login">
        {isLogged ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Menu.Item>
      <Menu.Item key="register">
        <Link to="/register">Registro</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuUser;

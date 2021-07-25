import React from "react";
import useUser from "hooks/useUser";
import { Link } from "wouter";
import { Menu, Badge } from "antd";
import {ShoppingCartOutlined} from '@ant-design/icons'

const MenuUser = () => {
  const { isLogged, logout } = useUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Badge count={1}>
          <ShoppingCartOutlined style={{fontSize: 20}} />
        </Badge>
      </Menu.Item>
      <Menu.Item>
        {isLogged ? (
          <button onClick={handleClick}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">Registro</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuUser;

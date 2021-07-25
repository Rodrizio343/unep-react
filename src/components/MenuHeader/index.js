import React, { useState } from "react";
import { Menu } from "antd";
import logo from "assets/img/UNEP-logo-2.png"
import { Link } from "wouter";

const MenuHeader = () => {
  const [state, setState] = useState({ current: "home" });
  

  const handleClick = (e) => {
    setState({ current: e.key });
  };

  return (
    <>
    <img src={logo} alt="logo-unep" style={{maxWidth:150}}/>
    <Menu
      onClick={handleClick}
      selectedKeys={[state.current]}
      mode="horizontal"
    >
      <Menu.Item key="home">
        <Link to='/' rel="noopener noreferrer">
          Inicio
        </Link>
      </Menu.Item>
      <Menu.Item key="shop">
        <Link to='/shop' rel="noopener noreferrer">
          Shop
        </Link>
      </Menu.Item>
    </Menu>
    </>
  );
};

export default MenuHeader;

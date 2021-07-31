import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import './ListItem.css'
import { useDispatch } from "react-redux";
import { removeFromCart } from "redux/productos/carritoSlice";

const ListItem = ({ name, price, picture,number }) => {

  const dispatch = useDispatch()

  return (
    <li className='list-item'>
      <div style={{display:'flex'}}>
        <a href='javascript:void(0)' onClick={() => dispatch(removeFromCart(name))}>
          <CloseCircleOutlined />
        </a>
        <div className='item-description'>
          <span>{name}</span>
          <small>{price} x {number}</small>
        </div>
      </div>
      <img src={picture} className='item-picture'/>
    </li>
  );
};

export default ListItem;

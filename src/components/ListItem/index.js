import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import './ListItem.css'

const ListItem = ({ name, price, picture,number }) => {
  return (
    <li className='list-item'>
      <div style={{display:'flex'}}>
        <a href='#'>
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

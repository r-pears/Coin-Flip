import React from 'react';
import './Coin.css';

const Coin = (props) => {
  return (
    <div className='Coin'>
      <img src={props.imgSrc} alt={props.side} />
    </div>
  );
}
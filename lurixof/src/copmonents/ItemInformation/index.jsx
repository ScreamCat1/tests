import React from 'react';

const renderItem = ({ title, text, img}) => (
  <div>
    <h2>
      {title}
    </h2>
    <img src={img} alt=""/>
    <p>{text}</p>
  </div>
);

const ItemInformation = ({ currentItem }) => (
  <div>
    {renderItem(currentItem)}
  </div>);

export default ItemInformation;
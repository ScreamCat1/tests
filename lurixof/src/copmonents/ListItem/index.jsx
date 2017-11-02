import React from 'react';
import './ListItem.css';

const renderItems = (data, showItemInfo) => data
  .map(({ id, title }) => (
    <div key={id} className="list-item"
         onClick={showItemInfo}
    data-id={id}
    >
  {title}
</div>));

const ListItem = ({ data, showItemInfo }) => (
  <div className="list-item-wrap">
    {renderItems(data, showItemInfo)}
  </div>);

export default  ListItem;

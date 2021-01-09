import React from 'react';
import Menu from './Menu';

const Menus = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem, index) => {
        return <Menu key={index} {...menuItem} />;
      })}
    </div>
  );
};

export default Menus;

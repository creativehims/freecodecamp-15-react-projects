import React from 'react';
import Category from './Category';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <Category key={index} category={category} filterItems={filterItems} />
        );
      })}
    </div>
  );
};

export default Categories;

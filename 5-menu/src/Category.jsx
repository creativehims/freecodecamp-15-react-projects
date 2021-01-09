import React from 'react';

const Category = ({ category, filterItems }) => {
  return (
    <button
      type="button"
      className="filter-btn"
      onClick={() => filterItems(category)}
    >
      {category}
    </button>
  );
};

export default Category;

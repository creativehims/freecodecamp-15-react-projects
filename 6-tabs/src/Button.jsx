import React from 'react';

const Button = ({ item, value, setValue, id }) => {
  return (
    <button
      key={item.id}
      onClick={() => setValue(id)}
      className={`job-btn ${id === value && 'active-btn'}`}
    >
      {item.company}
    </button>
  );
};

export default Button;

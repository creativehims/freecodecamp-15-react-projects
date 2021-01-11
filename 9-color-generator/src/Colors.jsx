import React from 'react';
import SingleColor from './SingleColor';

const Colors = ({ list }) => {
  return (
    <section className="colors">
      {list.map((color, index) => {
        return (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        );
      })}
    </section>
  );
};

export default Colors;

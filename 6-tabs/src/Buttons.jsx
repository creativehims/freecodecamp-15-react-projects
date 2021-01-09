import React from 'react';
import Button from './Button';

const Buttons = ({ jobs, value, setValue }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <Button
            key={index}
            item={item}
            value={value}
            setValue={setValue}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default Buttons;

import React from 'react';

const InputForm = ({ count, setCount, onSubmit }) => {
  return (
    <form className="lorem-form" onSubmit={onSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <button className="btn">generate</button>
    </form>
  );
};

export default InputForm;

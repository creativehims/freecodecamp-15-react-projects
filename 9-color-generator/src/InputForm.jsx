import React from 'react';

const InputForm = ({ color, setColor, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#f15025"
        className={`${error ? 'error' : null}`}
      />
      <button className="btn" type="submit">
        submit
      </button>
    </form>
  );
};

export default InputForm;

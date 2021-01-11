import React, { useState } from 'react';
import Values from 'values.js';
import InputForm from './InputForm';
import Colors from './Colors';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <InputForm
          color={color}
          setColor={setColor}
          handleSubmit={handleSubmit}
          error={error}
        />
      </section>
      <Colors list={list} />
    </>
  );
}

export default App;

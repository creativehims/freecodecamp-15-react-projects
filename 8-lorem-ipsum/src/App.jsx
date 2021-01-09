import React, { useState } from 'react';
import data from './data';
import InputForm from './InputForm';
import Output from './Output';

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = count;
    if (count <= 0) {
      amount = 1;
    } else if (count > data.length) {
      amount = data.length;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <InputForm count={count} setCount={setCount} onSubmit={handleSubmit} />
      <Output text={text} />
    </section>
  );
};

export default App;

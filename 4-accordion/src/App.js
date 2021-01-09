import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <Questions questions={questions} />
      </div>
    </main>
  );
}

export default App;

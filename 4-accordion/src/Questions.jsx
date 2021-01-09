import React from 'react';
import SingleQuestion from './Question';

const Questions = ({ questions }) => {
  return (
    <section className="info">
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Questions;

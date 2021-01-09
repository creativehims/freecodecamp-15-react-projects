import React from 'react';
import Duty from './Duty';

const Duties = ({ title, company, dates, duties }) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, index) => {
        return <Duty key={index} duty={duty} />;
      })}
    </article>
  );
};

export default Duties;

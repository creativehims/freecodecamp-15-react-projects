import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Person from './Person';

const People = ({ people, index, setIndex }) => {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        return (
          <Person
            key={personIndex}
            person={person}
            index={index}
            id={personIndex}
            length={people.length}
          />
        );
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default People;

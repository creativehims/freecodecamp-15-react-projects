import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Person = ({ person, index, id, length }) => {
  const { image, name, title, quote } = person;
  let position = 'nextSlide';

  if (id === index) {
    position = 'activeSlide';
  }
  if (id === index - 1 || (index === 0 && id === length - 1)) {
    position = 'lastSlide';
  }

  return (
    <article className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Person;

import React from 'react';
import Bird from './Bird';

const BirdList = ({ birds }) => {
  return (
    <div>
      {birds.map(bird => (
        <Bird key={bird.id} bird={bird} />
      ))}
    </div>
  );
};

export default BirdList;

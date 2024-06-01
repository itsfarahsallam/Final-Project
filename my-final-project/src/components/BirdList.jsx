import React from 'react';
import Bird from './Bird';

const BirdList = ({ birds }) => {
  return (
    <div>
      {birds.length === 0 ? (
        <p>No birds found.</p>
      ) : (
        birds.map((bird, index) => (
          <Bird key={index} bird={bird} />
        ))
      )}
    </div>
  );
};

export default BirdList;

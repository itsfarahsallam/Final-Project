import React from 'react';

const Bird = ({ bird }) => {
  return (
    <div className="bird">
      <h3>{bird.name}</h3>
      <p><i>{bird.sciname}</i></p>
      <p>Habitat: {bird.habitat}</p>
    </div>
  );
};

export default Bird;

import React from 'react';

const Bird = ({ bird }) => {
  return (
    <div>
      <h2>{bird.name}</h2>
      <h1>{bird.sciName}</h1>
      <p>{bird.description}</p>
    </div>
  );
};

export default Bird;

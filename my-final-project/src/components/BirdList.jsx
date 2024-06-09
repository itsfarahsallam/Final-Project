// BirdList.js
import React from 'react';

const BirdList = ({ birds }) => {
  return (
    <div>
      {birds.length > 0 ? (
        birds.map((bird, index) => (
          <div key={index} className="bird">
            <h3>{bird.comName}</h3>
            <p>Scientific Name: {bird.sciName}</p>
            <p>Location: {bird.obsDt}</p> 
          </div>
        ))
      ) : (
        <p>No birds found</p>
      )}
    </div>
  );
};

export default BirdList;

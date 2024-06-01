import React from 'react';
import PropTypes from 'prop-types';

const Bird = ({bird}) => {
  return (
    <div className='bird'>
      <h3>{bird.name}</h3>
      <h3>{bird.sciname}</h3>
      <h3>{bird.habitat}</h3>
     
    </div>
  );
};

Bird.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string,
    sciname: PropTypes.string,
    habitat: PropTypes.string
  }),
};

export default Bird;

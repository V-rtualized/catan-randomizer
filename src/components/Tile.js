import React from 'react';

const Tile = ({ resource }) => {
  return (
    <svg viewBox="0 0 60 50" className={`tile ${resource}`}>
      <polygon points="0,25 15,0 45,0 60,25 45,50 15,50" />
    </svg>
  );
};

export default Tile;
import React from 'react'

const Tile = ({ resource, number }) => {
  return (
    <svg viewBox="0 0 60 50" className={`tile ${resource}`}>
      <polygon points="0,25 15,0 45,0 60,25 45,50 15,50" />
      <text
        x="30"
        y="27"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
        fill={number === '8' || number === '6' ? 'crimson' : 'black'}
      >
        {number}
      </text>
    </svg>
  )
}

export default Tile

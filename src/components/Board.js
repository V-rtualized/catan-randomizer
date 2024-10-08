import React, { useMemo } from 'react'
import Tile from './Tile'
import { generateBoard } from '../utils/boardGeneration'
import useWindowDimensions from '../utils/useWindowDimensions'

const Board = ({ isExpansion }) => {
  const tiles = useMemo(() => generateBoard(isExpansion), [isExpansion])
  const { height, width } = useWindowDimensions()

  return (
    <div
      className="board"
      style={{ transform: `scale(${Math.min(height, width) / 350})` }}
    >
      {tiles.map((columnTiles, colIndex) => (
        <div key={colIndex} className="column">
          {columnTiles.map((tile, rowIndex) => (
            <Tile
              key={rowIndex}
              resource={tile.resource}
              number={tile.number}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board

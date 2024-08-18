import React, { useMemo } from 'react';
import Tile from './Tile';

const resourcesToArray = (resourceCounts) => {
  const result = [];

  for (const resource in resourceCounts) {
    const count = resourceCounts[resource];
    for (let i = 0; i < count; i++) {
      result.push(resource);
    }
  }

  return result;
}

const classicData = {
  tilesPerRow: [3, 4, 5, 4, 3],
  numColumns: 5,
  resources: resourcesToArray({
    'wood': 4,
    'sheep': 4,
    'wheat': 4,
    'stone': 3,
    'brick': 3,
    'desert': 1
  })
}

const expansionData = {
  tilesPerRow: [3, 4, 5, 6, 5, 4, 3],
  numColumns: 7,
  resources: resourcesToArray({
    'wood': 6,
    'sheep': 6,
    'wheat': 6,
    'stone': 5,
    'brick': 5,
    'desert': 2
  })
}

const shuffle = (array) => {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const Board = ({ isExpansion }) => {
  const tiles = useMemo(() => {
    let data = JSON.parse(JSON.stringify(isExpansion? expansionData : classicData))
    shuffle(data.resources)
    return Array.from(
      { length: data.numColumns }, 
      (_, i) => Array.from(
                  { length: data.tilesPerRow[i] }, 
                  (_, j) => ({ resource: data.resources.pop() })
                )
              )
  }, [isExpansion]);

  return (
    <div className="board">
      {tiles.map((columnTiles, colIndex) => (
        <div key={colIndex} className="column" style={colIndex < Math.ceil(tiles.length / 2)-1? { marginRight: -10 } : colIndex > Math.ceil(tiles.length / 2)-1? { marginLeft: -10 } : undefined}>
          {columnTiles.map((tile, rowIndex) => (
            <Tile key={rowIndex} resource={tile.resource} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
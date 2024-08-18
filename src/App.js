import React, { useState, useRef, useEffect } from 'react'
import Board from './components/Board'
import useWindowDimensions from './utils/useWindowDimensions'
import './App.css'

function App() {
  const [isExpansion, setIsExpansion] = useState(false)
  const [randomizeKey, setRandomizeKey] = useState(0)

  return (
    <div className="App">
      <div class="header">
        <h1 className="title">Catan Randomizer</h1>
        <div className="buttons">
          <button onClick={() => setRandomizeKey((prevKey) => ++prevKey)}>
            Randomize
          </button>
          <button onClick={() => setIsExpansion(!isExpansion)}>
            {isExpansion? "Use Classic Board" : "Use Expansion Board"}
          </button>
        </div>
      </div>
      <div className="board-container">
        <Board isExpansion={isExpansion} key={randomizeKey} />
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [isExpansion, setIsExpansion] = useState(false)
  const [randomizeKey, setRandomizeKey] = useState(0) // New state to force re-render

  return (
    <div className="App">
      <button onClick={() => setIsExpansion(!isExpansion)}>
        {isExpansion ? 'Classic Mode' : 'Expansion Mode'}
      </button>
      <button onClick={() => setRandomizeKey((prevKey) => prevKey + 1)}>
        Randomize
      </button>
      <Board isExpansion={isExpansion} key={randomizeKey} />
    </div>
  )
}

export default App

import React from 'react'
import { GameProvider } from './context/GameContext'
import Navigation from './navigation'

const App: React.FC = () => {
  return (
    <GameProvider>
      <Navigation />
    </GameProvider>
  )
}

export default App

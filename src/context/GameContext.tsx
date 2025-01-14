import { GameContextType } from '@/types/IGameContext'
import { Player } from '@/types/IPlayer'
import { Settings } from '@/types/ISettings'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const GameContext = createContext<GameContextType | null>(null)

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([])
  const [settings, setSettings] = useState<Settings>({
    numberOfTeams: 2,
    playersPerTeam: 0,
    modeSort: 'RANDOM',
  })
  const [captains, setCaptains] = useState<Player[]>([])
  const [results, setResults] = useState<string[]>([])
  const [totalPlayers, setTotalPlayers] = useState(0)

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        settings,
        setSettings,
        captains,
        setCaptains,
        results,
        setResults,
        totalPlayers,
        setTotalPlayers,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = (): GameContextType => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

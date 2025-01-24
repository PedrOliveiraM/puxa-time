import { ScoreType } from '@/components/score-button'
import { GameContextType } from '@/types/IGameContext'
import { Player } from '@/types/IPlayer'
import { Settings } from '@/types/ISettings'
import { Team } from '@/types/ITeams'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const GameContext = createContext<GameContextType | null>(null)

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [settings, setSettings] = useState<Settings>({
    numberOfTeams: 2,
    playersPerTeam: 0,
    modeSort: 'RANDOM',
  })
  const [captains, setCaptains] = useState<Player[]>([])
  const [results, setResults] = useState<Team[]>([])
  const [totalPlayers, setTotalPlayers] = useState(0)

  const updateResults = () => {
    const sortedTeams = [...teams].sort((a, b) => {
      if (b.victories !== a.victories) return b.victories - a.victories
      if (b.draws !== a.draws) return b.draws - a.draws
      if (a.defeats !== b.defeats) return a.defeats - b.defeats
      return a.name.localeCompare(b.name)
    })

    const top3 = sortedTeams.slice(0, 3)
    setResults(top3)
  }

  const updateTeamScore = (
    teamName: string,
    type: ScoreType,
    action: 'add' | 'remove'
  ) => {
    setTeams(prevTeams =>
      prevTeams.map(team => {
        if (team.name === teamName) {
          const change = action === 'add' ? 1 : -1
          const newValue = Math.max((team[type] || 0) + change, 0)
          return { ...team, [type]: newValue }
        }
        return team
      })
    )
    updateResults()
  }

  const reset = () => {
    setPlayers([])
    setTeams([])
    setSettings({
      numberOfTeams: 2,
      playersPerTeam: 0,
      modeSort: 'RANDOM',
    })
    setCaptains([])
    setResults([])
    setTotalPlayers(0)
  }

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
        teams,
        setTeams,
        updateTeamScore,
        reset,
        updateResults,
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

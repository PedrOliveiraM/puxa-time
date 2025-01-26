import { Player } from './IPlayer'
import { Settings } from './ISettings'
import { Team } from './ITeams'

export interface GameContextType {
  players: Player[]
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>
  settings: Settings
  setSettings: React.Dispatch<React.SetStateAction<Settings>>
  captains: Player[]
  setCaptains: React.Dispatch<React.SetStateAction<Player[]>>
  results: Team[]
  setResults: React.Dispatch<React.SetStateAction<Team[]>>
  totalPlayers: number
  setTotalPlayers: React.Dispatch<React.SetStateAction<number>>
  teams: Team[]
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>
  updateTeamScore: (
    teamName: string,
    type: keyof Pick<Team, 'victories' | 'draws' | 'defeats'>,
    action: 'add' | 'remove'
  ) => void
  reset: () => void
  updateResults: () => void
}

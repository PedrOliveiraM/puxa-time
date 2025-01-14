export interface Settings {
  numberOfTeams: number
  playersPerTeam: number
  modeSort: Modes
}

type Modes = 'RANDOM' | 'ARRIVAL' | 'PRIORITY' | 'SKILL' 

export interface Settings {
  numberOfTeams: number
  playersPerTeam: number
  modeSort: Modes
}

export type Modes = 'RANDOM' | 'ARRIVAL' | 'PRIORITY' | 'SKILL' | 'NULL'

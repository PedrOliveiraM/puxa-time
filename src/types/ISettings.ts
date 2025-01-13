export interface Settings {
  numberOfTeams: number
  playersPerTeam: number
  drawMode: 'balanced' | 'random' | 'ordered' | 'prioritized'
}

export interface ITeamFormProps {
  totalPlayers: number
  numberOfTeams: number
  playersPerTeam: number
  playerList: string[]
  setTotalPlayers: (value: number) => void
  setNumberOfTeams: (value: number) => void
  setPlayersPerTeam: (value: number) => void
  setPlayerList: (value: string[]) => void
  handleFinishStepOne: () => void
  handleSubmit?: () => void
}

export interface ITeamFormProps {
  totalPlayers: number
  numberOfTeams: number
  playersPerTeam: number
  playerList: string[]
  setTotalPlayers: (value: number) => void
  setNumberOfTeams: (value: number) => void
  setPlayersPerTeam: (value: number) => void
  setPlayerList: (value: string[]) => void
  handlePreviousStep?: () => void
  handleNextStep: () => void
  handleSubmit?: () => void
}

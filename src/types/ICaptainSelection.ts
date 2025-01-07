export interface ICaptainSelectionProps {
  players: string[]
  numberOfTeams: number
  onCaptainsSelected: (captains: string[]) => void
  handleCancelStepTwo: () => void
}

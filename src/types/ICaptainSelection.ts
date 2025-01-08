export interface ICaptainSelectionProps {
  players: string[]
  numberOfTeams: number
  onCaptainsSelected: (captains: string[]) => void
  handlePreviousStep: () => void
  handleNextStep: () => void
}

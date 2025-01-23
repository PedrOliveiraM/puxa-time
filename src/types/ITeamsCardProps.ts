import { Player } from "./IPlayer";

export interface TeamCardProps {
  teamName: string
  captainName: string
  players: Player[]
  score: number
  victories: number
  draws: number
  defeats: number
}
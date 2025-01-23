import { Player } from "./IPlayer";

export interface Team {
  name: string
  players: Player[]
  score: number
}
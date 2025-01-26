import { Player } from './IPlayer'
import { SkillLevel } from './ISkill'

export interface SkillCardProps {
  item: Player
  handleSkillChange: (playerName: string, skill: SkillLevel) => void
}

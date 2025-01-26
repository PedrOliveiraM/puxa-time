import { SkillLevel } from './ISkill'

export interface Player {
  name: string
  skill?: SkillLevel | undefined
  priority?: boolean
  position?: number
  isCaptain?: boolean
}

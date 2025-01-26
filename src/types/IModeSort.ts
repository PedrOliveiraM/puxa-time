import { IconProps } from '@tabler/icons-react-native'
import { Modes } from './ISettings'

export interface ModeSort {
  RANDOM: string
  ARRIVAL: string
  PRIORITY: string
  SKILL: string
}

export type ModeSortProps = {
  id: number
  modeKey: Modes
  description: string
  label: string
  icon: React.ComponentType<IconProps>
}

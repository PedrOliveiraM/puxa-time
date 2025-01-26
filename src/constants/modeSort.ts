import { ModeSort, ModeSortProps } from '@/types/IModeSort'
import {
  IconArrowsShuffle,
  IconFlagFilled,
  IconFlameFilled,
  IconProps,
  IconStarFilled,
} from '@tabler/icons-react-native'

export const modeSort: ModeSort = {
  RANDOM: 'ALEATÓRIO',
  ARRIVAL: 'CHEGADA',
  PRIORITY: 'PRIORIDADE',
  SKILL: 'HABILIDADE',
}

export const modeSortIcons: Record<string, React.ComponentType<IconProps>> = {
  RANDOM: IconArrowsShuffle,
  ARRIVAL: IconFlagFilled,
  PRIORITY: IconStarFilled,
  SKILL: IconFlameFilled,
}

export const modeSortArray: ModeSortProps[] = [
  {
    id: 1,
    modeKey: 'RANDOM',
    description: 'Por ordem aleatória',
    label: modeSort.RANDOM,
    icon: modeSortIcons.RANDOM,
  },
  {
    id: 2,
    modeKey: 'ARRIVAL',
    description: 'Por ordem de chegada',
    label: modeSort.ARRIVAL,
    icon: modeSortIcons.ARRIVAL,
  },
  {
    id: 3,
    modeKey: 'PRIORITY',
    description: 'Por ordem de prioridade',
    label: modeSort.PRIORITY,
    icon: modeSortIcons.PRIORITY,
  },
  {
    id: 4,
    modeKey: 'SKILL',
    description: 'Por balanceamento de habilidades',
    label: modeSort.SKILL,
    icon: modeSortIcons.SKILL,
  },
]

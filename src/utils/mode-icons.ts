import { ModeSort } from '@/types/IModeSort';
import {
  IconArrowsShuffle,
  IconFlagFilled,
  IconFlameFilled,
  IconProps,
  IconStar,
} from '@tabler/icons-react-native';


export const modeSort: ModeSort = {
  RANDOM: 'ALEATÓRIO',
  ARRIVAL: 'CHEGADA',
  PRIORITY: 'PRIORIDADE',
  SKILL: 'HABILIDADE',
};

export const modeSortIcons: Record<string, React.ComponentType<IconProps>> = {
  RANDOM: IconArrowsShuffle,
  ARRIVAL: IconFlagFilled,
  PRIORITY: IconStar,
  SKILL: IconFlameFilled,
}

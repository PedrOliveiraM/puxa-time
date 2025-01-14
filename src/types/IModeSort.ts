import { IconProps } from "@tabler/icons-react-native";

export interface ModeSort {
  RANDOM: string;
  ARRIVAL: string;
  PRIORITY: string;
  SKILL: string;
}

export type ModeSortProps = {
  id: number;
  modeKey: string;
  description: string;
  label: string;
  icon: React.ComponentType<IconProps>;
}
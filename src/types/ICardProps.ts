import { ModeSortProps } from "./IModeSort"
import { Modes } from "./ISettings"

export type CardProps = ModeSortProps & {
  setSelectedMode: (value: Modes) => void
  isSelected: boolean
}
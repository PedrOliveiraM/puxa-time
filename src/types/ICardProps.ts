import { ModeSortProps } from "./IModeSort"

export type CardProps = ModeSortProps & {
  setSelectedMode: (value: string) => void
  isSelected: boolean
}
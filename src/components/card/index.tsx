import { CardProps } from '@/types/ICardProps'
import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './styles'

export function Card({
  label,
  modeKey,
  icon: Icon,
  isSelected,
  description,
  setSelectedMode,
}: CardProps) {
  const handleSelectedMode = (modeKey: string) => {
    setSelectedMode(modeKey)
  }

  return (
    <TouchableOpacity
      style={[s.container, isSelected && s.selectedContainer]}
      onPress={() => handleSelectedMode(modeKey)}
    >
      <Text style={s.label}>{label}</Text>
      <Text style={s.description}>{description}</Text>
      <View style={s.iconContainer}>
        <Icon width={30} color={isSelected ? '#fff' : '#000'} />
      </View>
    </TouchableOpacity>
  )
}

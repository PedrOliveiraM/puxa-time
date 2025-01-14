import { colors } from '@/styles/colors'
import { ActivityIndicator } from 'react-native'
import { s } from './styles'

export function Loading() {
  return <ActivityIndicator style={s.container} color={colors.blue[300]} />
}

import { IconArrowBackUp } from '@tabler/icons-react-native'
import { Button } from '../button'

import { colors } from '@/styles/colors'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { s } from './styles'

export function HeaderBackButton() {
  const router = useRouter()
  return (
    <View style={s.container}>
      <Button style={s.button} onPress={() => router.back()}>
        <Button.Icon icon={IconArrowBackUp} color={colors.gray[200]} />
      </Button>
    </View>
  )
}

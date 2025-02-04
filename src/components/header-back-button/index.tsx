import { IconArrowBackUp, IconUserUp } from '@tabler/icons-react-native'
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
        <Button.Title>Voltar</Button.Title>
        <Button.Icon icon={IconArrowBackUp} color={colors.gray[200]} />
      </Button>

      {/* 
        -- esperando publicação 
        <Button style={s.button} onPress={() => router.push('/plans')} variant="outline">
          <Button.Icon icon={IconUserUp} color={colors.blue[300]} />
        </Button> 
      */}
    </View>
  )
}

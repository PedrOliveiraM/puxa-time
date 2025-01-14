import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Loading } from '@/components/loading'
import { modeSortArray } from '@/constants/modeSort'
import { s } from '@/styles/styles.modeSort'
import { IconArrowNarrowRightDashed } from '@tabler/icons-react-native'
import { useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function ModeSort() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedMode, setSelectedMode] = useState<string>('')

  const checkMode = () => selectedMode !== ''

  const handleSubmit = () => {
    if (!checkMode()) {
      Alert.alert('Ops', 'Selecione um modo de sorteio.')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    console.log('selectedMode:', selectedMode)
    // redirecionar
  }

  return (
    <SafeAreaView style={s.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={s.container}>
          <Image source={require('@/assets/Logo.png')} style={s.logo} />
          <View style={s.titleContainer}>
            <Image source={require('@/assets/arrows-random.png')} style={s.randomIcon} />
            <Text style={s.title}>Forma de Sorteio</Text>
          </View>

          <View style={s.flatContainer}>
            <FlatList
              data={modeSortArray}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  modeKey={item.modeKey}
                  icon={item.icon}
                  label={item.label}
                  description={item.description}
                  setSelectedMode={setSelectedMode}
                  isSelected={selectedMode === item.modeKey}
                />
              )}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
            />

            <View style={s.buttonContainer}>
              <Button
                onPress={handleSubmit}
                variant={checkMode() ? 'success' : 'disabled'}
                disabled={!checkMode()}
                style={s.button}
              >
                <Button.Title>Avançar</Button.Title>
                <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
              </Button>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

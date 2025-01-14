import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Loading } from '@/components/loading'
import { modeSortArray } from '@/constants/modeSort'
import { routes } from '@/constants/routesSort'
import { useGame } from '@/context/GameContext'
import { s } from '@/styles/styles.modeSort'
import { Modes } from '@/types/ISettings'
import { IconArrowNarrowRightDashed } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function ModeSort() {
  const { setSettings } = useGame()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedMode, setSelectedMode] = useState<Modes>('NULL')

  const checkMode = () => {
    return selectedMode !== 'NULL'
  }

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

    setSettings(prev => ({
      ...prev,
      modeSort: selectedMode,
    }))

    const route = routes[selectedMode]

    if (route) {
      router.push(route)
    } else {
      console.warn('Modo de sorteio inválido:', selectedMode)
    }
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

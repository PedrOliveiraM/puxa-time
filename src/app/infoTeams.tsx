import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { useGame } from '@/context/GameContext'
import { colors } from '@/styles/colors'
import { s } from '@/styles/styles.infoPlayers'
import { IconArrowNarrowRightDashed, IconEraser } from '@tabler/icons-react-native'

import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Alert,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

export default function InfoTeams() {
  const { players, setSettings } = useGame()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [numberOfTeams, setNumberOfTeams] = useState<number>(0)
  const [playersPerTeam, setPlayersPerTeam] = useState<number>(0)

  const checkTeams = () => {
    return numberOfTeams !== 0 && playersPerTeam !== 0
  }

  const handleSubmit = () => {
    if (!checkTeams()) return Alert.alert('Ops', 'Preencha todos os campos.')

    if (numberOfTeams * playersPerTeam < players.length)
      return Alert.alert(
        'Ops',
        'Alguns jogadores ficarão de fora.Pois a quantidade de jogadores é maior que a quantidade de jogadores por time.'
      )

    setSettings({
      numberOfTeams,
      playersPerTeam,
      modeSort: 'RANDOM',
    })

    console.log('players', players)
    console.log('numberOfTeams', numberOfTeams)
    console.log('playersPerTeam', playersPerTeam)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    router.push('/modeSort')
  }

  const reset = () => {
    setNumberOfTeams(0)
    setPlayersPerTeam(0)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={[s.container]}>
            <Image source={require('@/assets/Logo.png')} style={s.logo} />
            <View style={s.titleContainer}>
              <Image
                source={require('@/assets/play-football.png')}
                style={s.footballIcon}
              />
              <Text style={s.title}>Convocação</Text>
            </View>

            <Text style={s.label}>Quantidade de times:</Text>
            <TextInput
              style={s.input}
              value={numberOfTeams.toString()}
              onChangeText={text => setNumberOfTeams(Number(text))}
              keyboardType="numeric"
              placeholder="Ex: 20"
              placeholderTextColor={colors.input.placeholder}
            />

            <Text style={s.label}>Quantidade de jogadores por times:</Text>
            <TextInput
              style={s.input}
              value={playersPerTeam.toString()}
              onChangeText={text => setPlayersPerTeam(Number(text))}
              keyboardType="numeric"
              placeholder="Ex: 20"
              placeholderTextColor={colors.input.placeholder}
            />
            <View style={s.buttonFooter}>
              <Button
                onPress={handleSubmit}
                variant={checkTeams() ? 'success' : 'disabled'}
                disabled={!checkTeams()}
                style={s.button}
              >
                <Button.Title>Avançar</Button.Title>
                <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
              </Button>

              <Button onPress={reset} variant="alert" style={s.button}>
                <Button.Title variant="alert">Limpar</Button.Title>
                <Button.Icon icon={IconEraser} color="white" />
              </Button>
            </View>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

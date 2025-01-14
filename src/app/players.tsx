import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { useGame } from '@/context/GameContext'
import { colors } from '@/styles/colors'
import { s } from '@/styles/styles.players'
import { Player } from '@/types/IPlayer'
import {
  IconArrowNarrowRightDashed,
  IconClipboard,
  IconEraser,
} from '@tabler/icons-react-native'
import * as Clipboard from 'expo-clipboard'
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

export default function PlayersScreen() {
  const { setPlayers, setTotalPlayers, totalPlayers } = useGame()
  const [playerList, setPlayerList] = useState<string[]>([])
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handlePaste = async () => {
    const text = await Clipboard.getStringAsync()

    if (text === '') {
      Alert.alert('Ops', 'Nenhum texto encontrado na área de transferência.')
      return
    }

    const numbersOfLines = text.split('\n').length
    const formattedPlayers = formatPlayerListToArray(text.split('\n'))
    setTotalPlayers(numbersOfLines)
    setPlayerList(formattedPlayers)
  }

  const formatPlayerListToArray = (inputList: string[]): string[] => {
    return inputList.map(player => {
      return player.replace(/^\d+-\s*/, '').trim()
    })
  }

  const transformPlayers = (playerNames: string[]): Player[] => {
    return playerNames.map(name => ({
      name,
      skill: undefined, // Definindo o skill como undefined
    }))
  }

  const checkPlayers = (): boolean => {
    return totalPlayers !== 0 && playerList.length === totalPlayers
  }

  const checkTeams = () => {
    return totalPlayers !== 0 && playerList.length === totalPlayers
  }

  const handleSubmit = () => {
    setError('')
    setIsLoading(true)

    if (!checkTeams()) {
      setError('Por favor, preencha todos os campos.')
      setIsLoading(false)
      Alert.alert('Erro', 'Por favor, preencha todos os campos.')
      return
    }

    if (!totalPlayers || !playerList.length) {
      setError('Por favor, preencha todos os campos.')
      setIsLoading(false)
      return
    }

    const formattedPlayers = formatPlayerListToArray(playerList)
    setPlayerList(formattedPlayers)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const convertedPlayers = transformPlayers(formattedPlayers)
    setPlayers(convertedPlayers)

    router.push('/infoTeams')
  }

  const reset = () => {
    setTotalPlayers(0)
    setPlayerList([])
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View style={s.container}>
            <Image source={require('@/assets/Logo.png')} style={s.logo} />
            <View style={s.titleContainer}>
              <Image
                source={require('@/assets/play-football.png')}
                style={s.footballIcon}
              />
              <Text style={s.title}>Convocação</Text>
            </View>

            <View style={s.playerListContainer}>
              <Text style={s.label}>Lista de jogadores:</Text>
              <Button style={s.buttonPaste} onPress={handlePaste}>
                <Button.Icon icon={IconClipboard} color="white" />
              </Button>
            </View>

            <TextInput
              style={[s.input, s.textarea]}
              value={playerList.join('\n')}
              onChangeText={text => setPlayerList(text.split('\n'))}
              placeholder="Cole aqui a lista de jogadores"
              placeholderTextColor={colors.input.placeholder}
              multiline
              textAlignVertical="top"
            />

            <Text style={s.label}>Quantidade total de jogadores:</Text>
            <TextInput
              style={s.input}
              value={totalPlayers.toString()}
              onChangeText={text => setTotalPlayers(Number(text))}
              keyboardType="numeric"
              placeholder="Ex: 20"
              placeholderTextColor={colors.input.placeholder}
            />

            {error ? <Text style={s.errorText}>{error}</Text> : null}

            <View style={s.buttonFooter}>
              <Button
                onPress={handleSubmit}
                variant={checkPlayers() ? 'success' : 'disabled'}
                disabled={!checkPlayers()}
                style={s.button}
              >
                <Button.Title>Avançar</Button.Title>
                <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
              </Button>

              <Button onPress={reset} variant="alert" style={s.button}>
                <Button.Title>Limpar</Button.Title>
                <Button.Icon icon={IconEraser} color="white" />
              </Button>
            </View>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

import { colors } from '@/styles/colors'
import { ITeamFormProps } from '@/types/ITeamForm'
import React, { useRef, useState } from 'react'
import {
  ActivityIndicator,
  EmitterSubscription,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Loading } from '../loading'
import { s } from './styles'

export function TeamForm({
  totalPlayers,
  numberOfTeams,
  playersPerTeam,
  playerList,
  setTotalPlayers,
  setNumberOfTeams,
  setPlayersPerTeam,
  setPlayerList,
  handleNextStep,
}: ITeamFormProps) {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollViewRef = useRef<ScrollView>(null)

  const handleSubmit = () => {
    setError('')
    setIsLoading(true)

    if (!totalPlayers || !numberOfTeams || !playersPerTeam || !playerList.length) {
      setError('Por favor, preencha todos os campos.')
      setIsLoading(false)
      return
    }

    const formattedPlayers = formatPlayerListToArray(playerList)
    setPlayerList(formattedPlayers)

    setTimeout(() => {
      setIsLoading(false)
      console.log('Dados processados:', {
        totalPlayers,
        numberOfTeams,
        playersPerTeam,
        playerList: formattedPlayers,
      })
    }, 2000)

    handleNextStep()
  }

  React.useEffect(() => {
    let keyboardDidShowListener: EmitterSubscription
    let keyboardDidHideListener: EmitterSubscription

    if (Platform.OS === 'android') {
      keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        scrollViewRef.current?.scrollToEnd({ animated: true })
      })
      keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
      })
    }

    return () => {
      if (Platform.OS === 'android') {
        keyboardDidShowListener.remove()
        keyboardDidHideListener.remove()
      }
    }
  }, [])

  const formatPlayerListToArray = (inputList: string[]): string[] => {
    return inputList.map(player => {
      return player.replace(/^\d+-\s*/, '').trim()
    })
  }

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={s.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentInset={{ bottom: 100 }} // Ajuste conforme necessário
          >
            <View style={s.formContainer}>
              <Text style={s.label}>Quantidade total de jogadores:</Text>
              <TextInput
                style={s.input}
                value={totalPlayers.toString()}
                onChangeText={text => setTotalPlayers(Number(text))}
                keyboardType="numeric"
                placeholder="Ex: 20"
                placeholderTextColor={colors.input.placeholder}
              />

              <Text style={s.label}>Número de times:</Text>
              <TextInput
                style={s.input}
                value={numberOfTeams.toString()}
                onChangeText={text => setNumberOfTeams(Number(text))}
                keyboardType="numeric"
                placeholder="Ex: 4"
                placeholderTextColor={colors.input.placeholder}
              />

              <Text style={s.label}>Jogadores por time:</Text>
              <TextInput
                style={s.input}
                value={playersPerTeam.toString()}
                onChangeText={text => setPlayersPerTeam(Number(text))}
                keyboardType="numeric"
                placeholder="Ex: 5"
                placeholderTextColor={colors.input.placeholder}
              />

              <Text style={s.label}>Lista de jogadores:</Text>
              <TextInput
                style={[s.input, s.textarea]}
                value={playerList.join('\n')}
                onChangeText={text => setPlayerList(text.split('\n'))}
                placeholder="Cole aqui a lista de jogadores, um por linha"
                placeholderTextColor={colors.input.placeholder}
                multiline
                textAlignVertical="top"
              />

              {error ? <Text style={s.errorText}>{error}</Text> : null}

              <TouchableOpacity
                style={[s.button, isLoading && s.buttonDisabled]}
                onPress={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color={colors.green[900]} />
                ) : (
                  <Text style={s.buttonText}>Formar Times</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  )
}

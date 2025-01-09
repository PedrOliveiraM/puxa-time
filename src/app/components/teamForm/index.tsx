import { colors } from '@/styles/colors'
import { ITeamFormProps } from '@/types/ITeamForm'
import {
  IconArrowNarrowLeftDashed,
  IconArrowNarrowRightDashed,
  IconClipboard,
  IconPlayFootball,
} from '@tabler/icons-react-native'
import * as Clipboard from 'expo-clipboard'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Button } from '../button'
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
  const [step, setStep] = useState(1)

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

  const handleNextStepTeam = () => {
    if (step === 1 && (!playerList.length || !totalPlayers)) {
      setError('Por favor, preencha a lista de jogadores e a quantidade total.')
      return
    }

    if (!checkPlayers()) {
      Alert.alert(
        'Erro',
        'A quantidade de jogadores informada não corresponde à lista de jogadores.'
      )
      setError('Por favor, preencha a lista de jogadores e a quantidade total.')
      return
    }

    setStep(step + 1)
    setError('')
  }

  const formatPlayerListToArray = (inputList: string[]): string[] => {
    return inputList.map(player => {
      return player.replace(/^\d+-\s*/, '').trim()
    })
  }

  const handlePaste = async () => {
    const text = await Clipboard.getStringAsync()

    if (text === '') {
      alert('Nenhum texto encontrado na área de transferência.')
      return
    }

    const numbersOfLines = text.split('\n').length
    setTotalPlayers(numbersOfLines)
    setPlayerList(text.split('\n'))
  }

  const checkPlayers = () => {
    return totalPlayers !== 0 && playerList.length === totalPlayers
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={s.formContainer}>
              {step === 1 && (
                <>
                  <View style={s.titleContainer}>
                    <IconPlayFootball size={32} />
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
                    placeholder="Cole aqui a lista de jogadores, um por linha"
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
                      onPress={handleNextStepTeam}
                      variant={checkPlayers() ? 'success' : 'disabled'}
                    >
                      <Button.Title>Avançar</Button.Title>
                      <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
                    </Button>
                  </View>
                </>
              )}

              {step === 2 && (
                <>
                  <View style={s.titleContainer}>
                    <IconPlayFootball size={32} />
                    <Text style={s.title}>Convocação</Text>
                  </View>
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
                  {error ? <Text style={s.errorText}>{error}</Text> : null}
                  <View style={s.buttonFooter}>
                    <TouchableOpacity
                      style={[s.button, isLoading && s.buttonDisabled]}
                      onPress={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <ActivityIndicator color={colors.green[900]} />
                      ) : (
                        <View style={s.buttonContent}>
                          <Text style={s.buttonText}>Escolher os Capitães</Text>
                          <IconArrowNarrowRightDashed
                            size={24}
                            color={colors.text.primary}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                    <Button variant="alert" onPress={() => setStep(step - 1)}>
                      <Button.Icon icon={IconArrowNarrowLeftDashed} color="white" />
                      <Button.Title>Voltar</Button.Title>
                    </Button>
                  </View>
                </>
              )}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

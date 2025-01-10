import { ICaptainSelectionProps } from '@/types/ICaptainSelection'
import { IconArrowNarrowLeftDashed, IconPlayFootball } from '@tabler/icons-react-native'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button } from '../button'
import { s } from './styles'

export function CaptainSelection({
  players,
  numberOfTeams,
  onCaptainsSelected,
  handlePreviousStep,
  handleNextStep,
}: ICaptainSelectionProps) {
  const [selectedCaptains, setSelectedCaptains] = useState<string[]>([])

  const handlePlayerSelect = (player: string) => {
    if (selectedCaptains.includes(player)) {
      setSelectedCaptains(selectedCaptains.filter(captain => captain !== player))
    } else if (selectedCaptains.length < numberOfTeams) {
      setSelectedCaptains([...selectedCaptains, player])
    }
  }

  const handleConfirm = () => {
    if (selectedCaptains.length === numberOfTeams) {
      onCaptainsSelected(selectedCaptains)
    }

    handleNextStep()
  }

  const checkCaptains = () => {
    return selectedCaptains.length === numberOfTeams
  }

  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <Image source={require('@/assets/play-football.png')} style={s.footballIcon} />
        {/* <IconPlayFootball size={32} /> */}
        <Text style={s.title}>Selecione os Capitães</Text>
      </View>

      <Text style={s.subtitle}>
        Escolha {numberOfTeams} jogadores para serem capitães
      </Text>

      <ScrollView style={s.playerList}>
        {players.map((player, index) => (
          <TouchableOpacity
            key={index}
            style={[s.playerItem, selectedCaptains.includes(player) && s.selectedPlayer]}
            onPress={() => handlePlayerSelect(player)}
          >
            <Text
              style={[
                s.playerName,
                selectedCaptains.includes(player) && s.selectedPlayerName,
              ]}
            >
              {player}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Button
        onPress={handleConfirm}
        disabled={!checkCaptains()}
        variant={checkCaptains() ? 'success' : 'disabled'}
      >
        <Text style={s.buttonText}>Confirmar Capitães</Text>
      </Button>

      <Button onPress={handlePreviousStep} style={s.confirmButton}>
        <Button.Icon icon={IconArrowNarrowLeftDashed} color="white" />
        <Button.Title>Voltar</Button.Title>
      </Button>
    </View>
  )
}

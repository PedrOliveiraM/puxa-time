import { ICaptainSelectionProps } from '@/types/ICaptainSelection'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
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

  return (
    <View style={s.container}>
      <Text style={s.title}>Selecione os Capitães</Text>
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
        disabled={selectedCaptains.length !== numberOfTeams}
        style={s.confirmButton}
        variant="success"
      >
        <Text style={s.buttonText}>Confirmar Capitães</Text>
      </Button>

      <Button
        onPress={handlePreviousStep}
        disabled={selectedCaptains.length !== numberOfTeams}
        style={s.confirmButton}
      >
        <Text style={s.buttonText}>Voltar</Text>
      </Button>
    </View>
  )
}

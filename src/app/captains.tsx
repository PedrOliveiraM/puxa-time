import { Button } from '@/components/button'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.captains'
import { Player } from '@/types/IPlayer'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function Captains() {
  const { settings, players } = useGame() // Pegando os times e jogadores do contexto
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([])

  // Calculando quantos capitães são necessários
  const numCaptainsRequired = settings.numberOfTeams

  // Função para alternar a seleção do capitão
  const handleSelectCaptain = (playerName: string) => {
    setSelectedPlayers(prevSelected => {
      // Verifica se o jogador já está selecionado como capitão
      const isAlreadyCaptain = prevSelected.some(player => player.name === playerName)

      if (isAlreadyCaptain) {
        // Remover da seleção de capitães
        return prevSelected.filter(player => player.name !== playerName)
      }
      // Adicionar o jogador à seleção de capitães se não tiver atingido o limite
      if (prevSelected.length < numCaptainsRequired) {
        const selectedPlayer = players.find(player => player.name === playerName)
        if (selectedPlayer) {
          return [...prevSelected, { ...selectedPlayer, isCaptain: true }]
        }
      }

      return prevSelected
    })
  }

  const sortedPlayers = [
    ...selectedPlayers,
    ...players.filter(
      player => !selectedPlayers.some(selected => selected.name === player.name)
    ),
  ]

  const handleSubmit = () => {
    router.push('/infoTeams')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Image source={require('@/assets/shield.png')} style={styles.randomIcon} />
          <Text style={styles.title}>Seleção de Capitães</Text>
        </View>
        <Text style={styles.subTitle}>Escolha {numCaptainsRequired} Capitães</Text>
        <FlatList
          data={sortedPlayers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.playerItem,
                item.isCaptain ? styles.selectedItem : undefined,
              ]}
              onPress={() => handleSelectCaptain(item.name)}
            >
              <Text style={styles.playerText}>
                {item.isCaptain ? '🛡️ ' : ''}
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.buttonContainer}>
          {/* Mostrar botão de avançar somente se a quantidade de capitães estiver completa */}
          {selectedPlayers.length === numCaptainsRequired && (
            <Button onPress={() => handleSubmit}>
              <Button.Title>Avançar</Button.Title>
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

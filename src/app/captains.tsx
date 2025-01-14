import { Button } from '@/components/button'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.captains'
import { Player } from '@/types/IPlayer'
import { IconArrowNarrowRightDashed } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function Captains() {
  const { settings, players, setCaptains, setPlayers } = useGame() // Pegando times e jogadores do contexto
  const [selectedCaptainNames, setSelectedCaptainNames] = useState<string[]>([])

  // Número de capitães necessários com base nas configurações
  const numCaptainsRequired = settings.numberOfTeams

  // Função para alternar a seleção do capitão
  const handleSelectCaptain = (playerName: string) => {
    setSelectedCaptainNames(prevSelected => {
      const isAlreadyCaptain = prevSelected.includes(playerName)

      if (isAlreadyCaptain) {
        return prevSelected.filter(name => name !== playerName)
      }

      if (prevSelected.length < numCaptainsRequired) {
        return [...prevSelected, playerName]
      }

      return prevSelected
    })
  }

  // Enviar capitães para o contexto e prosseguir para a próxima tela
  const handleSubmit = () => {
    const updatedPlayers = players.map(player => ({
      ...player,
      isCaptain: selectedCaptainNames.includes(player.name), // Define como true para capitães selecionados
    }))

    const selectedCaptains = updatedPlayers.filter(player => player.isCaptain)

    if (selectedCaptains.length !== numCaptainsRequired) {
      console.warn(
        'Número de capitães selecionados não corresponde ao esperado:',
        selectedCaptains
      )
      return
    }

    setPlayers(updatedPlayers) // Atualiza os jogadores no contexto
    setCaptains(selectedCaptains) // Atualiza os capitães no contexto
    router.push('/drawerTeams') // Navega para a próxima tela
  }

  // Ordenar jogadores para exibir os capitães selecionados primeiro
  const sortedPlayers = [
    ...selectedCaptainNames.map(name => players.find(player => player.name === name)!),
    ...players.filter(player => !selectedCaptainNames.includes(player.name)),
  ]

  const isReadyToProceed = selectedCaptainNames.length === numCaptainsRequired

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
                selectedCaptainNames.includes(item.name)
                  ? styles.selectedItem
                  : undefined,
              ]}
              onPress={() => handleSelectCaptain(item.name)}
            >
              <Text style={styles.playerText}>
                {selectedCaptainNames.includes(item.name) ? '🛡️ ' : ''}
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleSubmit}
            variant={isReadyToProceed ? 'success' : 'disabled'}
            disabled={!isReadyToProceed}
          >
            <Button.Title>Avançar</Button.Title>
            <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

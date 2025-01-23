import { Button } from '@/components/button'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.playersOrder'
import { IconArrowNarrowRightDashed, IconRefresh } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function PlayersOrder() {
  const { players, setPlayers } = useGame()
  const [currentPosition, setCurrentPosition] = useState<number>(1)
  const [showAdvanceButton, setShowAdvanceButton] = useState<boolean>(false)

  // Seleciona ou deseleciona o jogador e organiza a lista
  const handleSelectPlayer = (playerName: string) => {
    setPlayers(prev => {
      const updatedPlayers = prev.map(player =>
        player.name === playerName
          ? {
              ...player,
              position: player.position ? undefined : currentPosition, // Se já estiver selecionado, remove a posição
            }
          : player
      )

      // Se a posição foi removida, resetamos a contagem da posição
      const playersWithPosition = updatedPlayers.filter(
        player => player.position !== undefined
      )
      const playersWithoutPosition = updatedPlayers.filter(
        player => player.position === undefined
      )

      // Recalcula as posições para os jogadores selecionados
      const sortedPlayersWithPosition = playersWithPosition
        .sort((a, b) => a.position! - b.position!) // Ordena os jogadores selecionados pela posição
        .map((player, index) => ({
          ...player,
          position: index + 1, // Recalcula as posições de 1 para cima
        }))

      // Junta os jogadores selecionados e não selecionados
      const sortedPlayers = [
        ...sortedPlayersWithPosition, // Jogadores selecionados com posições recalculadas
        ...playersWithoutPosition, // Jogadores não selecionados
      ]

      // Atualiza a lista com a nova ordem
      return sortedPlayers
    })

    // Atualiza a próxima posição para o próximo jogador a ser selecionado
    setCurrentPosition(prev => prev + 1)
  }

  // Reseta as posições dos jogadores
  const handleResetPlayers = () => {
    setPlayers(prev =>
      prev.map(player => ({
        ...player,
        position: undefined, // Remove todas as posições atribuídas
      }))
    )

    setCurrentPosition(1) // Reinicia o contador de posição
  }

  // Verifica se todos os jogadores têm uma posição atribuída
  useEffect(() => {
    const allSelected = players.every(player => player.position !== undefined)
    setShowAdvanceButton(allSelected)
  }, [players])

  const handleSubmit = () => {
    router.push('/captains')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Image
            source={require('@/assets/arrows-random.png')}
            style={styles.randomIcon}
          />
          <Text style={styles.title}>Ordem de Chegada</Text>
        </View>
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[styles.playerItem, item.position ? styles.selectedItem : undefined]}
              onPress={() => handleSelectPlayer(item.name)} // Chama a função de selecionar ou desmarcar
            >
              <Text style={styles.playerText}>
                {item.position ? `${item.position}. ` : ''} {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.buttonContainer}>
          {showAdvanceButton && (
            <Button onPress={handleSubmit} variant="success">
              <Button.Title>Avançar</Button.Title>
              <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
            </Button>
          )}
          <Button onPress={handleResetPlayers} variant="alert">
            <Button.Title>Escolher Novamente</Button.Title>
            <Button.Icon icon={IconRefresh} color="white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

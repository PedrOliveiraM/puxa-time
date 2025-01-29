import { Button } from '@/components/button'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.playersOrder'
import {
  IconArrowNarrowRightDashed,
  IconRefresh,
  IconStarFilled,
} from '@tabler/icons-react-native'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function PlayersPriority() {
  const { players, setPlayers } = useGame()
  const [showAdvanceButton, setShowAdvanceButton] = useState<boolean>(false)

  // Seleciona ou deseleciona a prioridade de um jogador
  const handleSelectPlayer = (playerName: string) => {
    setPlayers(prev =>
      prev.map(player =>
        player.name === playerName
          ? { ...player, priority: !player.priority } // Alterna o valor da prioridade
          : player
      )
    )
  }

  // Reseta as prioridades dos jogadores
  const handleResetPlayers = () => {
    setPlayers(prev => prev.map(player => ({ ...player, priority: false }))) // Reseta a prioridade
  }

  // Verifica se pelo menos um jogador foi selecionado como prioridade
  useEffect(() => {
    const anySelected = players.some(player => player.priority)
    setShowAdvanceButton(anySelected)
  }, [players])

  const handleSubmit = () => {
    router.push('/captains')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <IconStarFilled style={styles.randomIcon} />
            <Text style={styles.title}>Ordem de Prioridade</Text>
          </View>
          <Text style={styles.subTitle}>Selecione os jogadores</Text>
        </View>
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.playerItem, item.priority ? styles.selectedItem : undefined]}
              onPress={() => handleSelectPlayer(item.name)} // Alterna a prioridade
            >
              <Text style={styles.playerText}>
                {item.priority ? '⭐ ' : ''} {item.name}
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
            <Button.Title variant="alert">Escolher Novamente</Button.Title>
            <Button.Icon icon={IconRefresh} variant="alert" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

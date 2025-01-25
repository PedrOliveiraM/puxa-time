import { Button } from '@/components/button'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.playersSkill'
import { SkillLevel } from '@/types/ISkill'
import {
  IconArrowNarrowRightDashed,
  IconFlameFilled,
  IconRefresh,
} from '@tabler/icons-react-native'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function PlayersSkill() {
  const { players, setPlayers } = useGame()

  // Define todos como Beginner por padrão ao montar o componente
  useEffect(() => {
    setPlayers(prev => prev.map(player => ({ ...player, skill: 'Beginner' })))
  }, [setPlayers])

  // Atualiza o nível de habilidade do jogador
  const handleSkillChange = (playerName: string, skill: SkillLevel) => {
    setPlayers(prev =>
      prev.map(player => (player.name === playerName ? { ...player, skill } : player))
    )
  }

  // Reseta os jogadores para Beginner
  const handleResetPlayers = () => {
    setPlayers(prev => prev.map(player => ({ ...player, skill: 'Beginner' })))
  }

  const handleSubmit = () => {
    router.push('/captains')
    console.log('players:', players)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <IconFlameFilled style={styles.randomIcon} />
            <Text style={styles.title}>Definir Nível de Habilidade</Text>
          </View>
          <Text style={styles.subTitle}>Selecione os jogadores</Text>
        </View>
        <FlatList
          data={players}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.playerItem}>
              <Text style={styles.playerText}>{item.name}</Text>
              <View style={styles.skillButtons}>
                <TouchableOpacity
                  style={[
                    styles.skillButton,
                    item.skill === 'Beginner' && styles.selectedSkillButton,
                  ]}
                  onPress={() => handleSkillChange(item.name, 'Beginner')}
                >
                  <Image
                    source={require('@/assets/skills/Beginner-icon.png')}
                    style={styles.skillImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.skillButton,
                    item.skill === 'Intermediate' && styles.selectedSkillButton,
                  ]}
                  onPress={() => handleSkillChange(item.name, 'Intermediate')}
                >
                  <Image
                    source={require('@/assets/skills/Intermediate-icon.png')}
                    style={styles.skillImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.skillButton,
                    item.skill === 'Advanced' && styles.selectedSkillButton,
                  ]}
                  onPress={() => handleSkillChange(item.name, 'Advanced')}
                >
                  <Image
                    source={require('@/assets/skills/Advanced-icon.png')}
                    style={styles.skillImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={handleSubmit} variant="success">
            <Button.Title>Avançar</Button.Title>
            <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
          </Button>

          <Button onPress={handleResetPlayers} variant="alert">
            <Button.Title>Escolher Novamente</Button.Title>
            <Button.Icon icon={IconRefresh} color="white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

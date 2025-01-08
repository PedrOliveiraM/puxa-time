import { ITeamDrawProps } from '@/types/ITeamDraw'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from '../button'
import { s } from './styles'

export function TeamDraw({
  players,
  playersPerTeam,
  numberOfTeams,
  handlePreviousStep,
}: ITeamDrawProps) {
  const [teams, setTeams] = useState<string[][]>([])

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const drawTeams = () => {
    const shuffledPlayers = shuffleArray(players)
    const newTeams: string[][] = []

    for (let i = 0; i < numberOfTeams; i++) {
      newTeams.push(shuffledPlayers.slice(i * playersPerTeam, (i + 1) * playersPerTeam))
    }

    setTeams(newTeams)
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>Sorteio de Times</Text>

      <Button onPress={drawTeams} style={s.drawButton} variant="success">
        <Button.Title>Sortear Times</Button.Title>
      </Button>

      <ScrollView style={s.teamsContainer}>
        {teams.map((team, index) => (
          <View key={index} style={s.teamCard}>
            <Text style={s.teamTitle}>Time {index + 1}</Text>
            {team.map((player, playerIndex) => (
              <Text key={playerIndex} style={s.playerName}>
                {player}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
      <Button onPress={handlePreviousStep} variant="default">
        <Text style={s.buttonText}>Voltar</Text>
      </Button>
    </View>
  )
}

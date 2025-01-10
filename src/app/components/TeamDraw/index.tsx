import { ITeamDrawProps } from '@/types/ITeamDraw'
import {
  IconArrowNarrowLeftDashed,
  IconBallFootball,
  IconUser,
  IconUserUp,
} from '@tabler/icons-react-native'
import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Button } from '../button'
import { s } from './styles'

export function TeamDraw({
  players,
  playersPerTeam,
  numberOfTeams,
  handlePreviousStep,
  captainsList,
}: ITeamDrawProps) {
  const [teams, setTeams] = useState<string[][]>([])
  const [isSorted, setIsSorted] = useState<boolean>(false)

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const drawTeams = () => {
    // Remove os capitães da lista de jogadores
    const remainingPlayers = players.filter(player => !captainsList.includes(player))

    // Verifica se há capitães suficientes para os times
    if (captainsList.length < numberOfTeams) {
      console.error('Número insuficiente de capitães para os times.')
      return
    }

    // Embaralha os capitães e atribui um capitão para cada time
    const shuffledCaptains = shuffleArray(captainsList)
    const newTeams: string[][] = shuffledCaptains
      .slice(0, numberOfTeams)
      .map(captain => [captain])

    // Embaralha os jogadores restantes
    const shuffledPlayers = shuffleArray(remainingPlayers)

    // Distribui os jogadores restantes entre os times
    for (const player of shuffledPlayers) {
      // Encontra o time com menos jogadores que ainda não atingiu o limite
      const teamIndex = newTeams.findIndex(team => team.length < playersPerTeam)
      if (teamIndex !== -1) {
        newTeams[teamIndex].push(player)
      }
    }

    setTeams(newTeams)
    setIsSorted(true)
  }

  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <Image source={require('@/assets/play-football.png')} style={s.footballIcon} />
        {/* <IconPlayFootball size={32} /> */}
        <Text style={s.title}>Sorteio dos Times</Text>
      </View>

      <Button onPress={drawTeams} style={s.drawButton} variant="success">
        <Button.Title>Puxar os Times</Button.Title>
        <Button.Icon icon={IconBallFootball} color="white" />
      </Button>

      {isSorted && (
        <ScrollView style={s.teamsContainer}>
          {teams.map((team, index) => (
            <View key={index} style={s.teamCard}>
              <Text style={s.teamTitle}>Time {index + 1}</Text>
              {team.map((player, playerIndex) => (
                <View
                  key={playerIndex}
                  style={s.playerContainer} // Novo estilo para alinhar ícone e texto
                >
                  {/* Exibe o ícone específico para capitão ou jogador */}
                  {captainsList.includes(player) ? (
                    <IconUserUp style={s.iconCaptain} />
                  ) : (
                    <IconUser style={s.iconPlayer} />
                  )}
                  <Text
                    style={[
                      s.playerName,
                      captainsList.includes(player) && s.captainName, // Aplica o estilo de capitão, se necessário
                    ]}
                  >
                    {player}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      )}

      <Button onPress={handlePreviousStep} variant="default">
        <Button.Icon icon={IconArrowNarrowLeftDashed} color="white" />
        <Button.Title>Voltar</Button.Title>
      </Button>
    </View>
  )
}

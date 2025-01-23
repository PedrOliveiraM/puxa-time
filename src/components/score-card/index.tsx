import { useGame } from '@/context/GameContext'
import { TeamCardProps } from '@/types/ITeamsCardProps'
import React from 'react'
import { Text, View } from 'react-native'
import { RenderScoreButton } from '../score-button'
import { styles } from './styles'

const ScoreCard: React.FC<TeamCardProps> = ({
  teamName,
  players,
  victories,
  draws,
  defeats,
}) => {
  const { updateTeamScore } = useGame()

  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={styles.playersContainer}>
        {players
          .filter(player => player.isCaptain)
          .map((player, index) => (
            <View key={index} style={styles.playerRow}>
              <Text style={styles.playerText}>
                {player.name} {player.isCaptain && '🛡️'}
              </Text>
            </View>
          ))}
      </View>
      <View style={styles.footer}>
        <RenderScoreButton
          count={victories}
          icon="✅"
          type="victories"
          teamName={teamName}
          updateTeamScore={updateTeamScore}
        />

        <RenderScoreButton
          count={draws}
          icon="⚪"
          type="draws"
          teamName={teamName}
          updateTeamScore={updateTeamScore}
        />

        <RenderScoreButton
          count={defeats}
          icon="❌"
          type="defeats"
          teamName={teamName}
          updateTeamScore={updateTeamScore}
        />
      </View>
    </View>
  )
}

export default ScoreCard

import { Team } from '@/types/ITeams'
import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export type ScoreType = keyof Pick<Team, 'victories' | 'draws' | 'defeats'>

interface RenderScoreButtonProps {
  teamName: string
  count: number
  type: ScoreType
  icon: string
  updateTeamScore: (teamName: string, type: ScoreType, action: 'add' | 'remove') => void
}

export const RenderScoreButton: React.FC<RenderScoreButtonProps> = React.memo(
  ({ count = 0, type, icon, teamName, updateTeamScore }) => {
    // Default 0
    const handleIncrement = useCallback(() => {
      updateTeamScore(teamName, type, 'add')
    }, [updateTeamScore, teamName, type])

    const handleDecrement = useCallback(() => {
      updateTeamScore(teamName, type, 'remove')
    }, [updateTeamScore, teamName, type])

    return (
      <View style={styles.scoreButtonContainer}>
        <TouchableOpacity
          style={styles.scoreButton}
          onPress={handleIncrement}
          accessibilityLabel={`Increase ${type}`}
          accessibilityHint={`Increases the ${type} count by 1`}
        >
          <Text style={styles.scoreButtonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.scoreTextContainer}>
          <Text style={styles.scoreIcon}>{icon}</Text>
          <Text style={styles.scoreText}>{count}</Text>
        </View>
        <TouchableOpacity
          style={styles.scoreButton}
          onPress={handleDecrement}
          accessibilityLabel={`Decrease ${type}`}
          accessibilityHint={`Decreases the ${type} count by 1`}
        >
          <Text style={styles.scoreButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
)

RenderScoreButton.displayName = 'RenderScoreButton'

import { TeamCardProps } from '@/types/ITeamsCardProps'
import { Text, View } from 'react-native'
import { styles } from './styles'

const TeamCard = ({ teamName, players }: TeamCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={styles.playersContainer}>
        {players.map((player, index) => (
          <Text key={index} style={styles.player}>
            {player.name} {player.isCaptain && '🦸'}
          </Text>
        ))}
      </View>
    </View>
  )
}

export default TeamCard

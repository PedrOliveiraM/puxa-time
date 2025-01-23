import { TeamCardProps } from '@/types/ITeamsCardProps'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

const TeamCard = ({ teamName, players }: TeamCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={styles.playersContainer}>
        {players.map((player, index) => (
          <View key={index} style={styles.playerRow}>
            <Image
              source={
                player.skill === 'Beginner'
                  ? require('@/assets/skills/Beginner-icon.png')
                  : player.skill === 'Intermediate'
                    ? require('@/assets/skills/Intermediate-icon.png')
                    : require('@/assets/skills/Advanced-icon.png')
              }
              style={styles.skillIcon}
            />
            <Text style={styles.playerText}>
              {player.name} {player.isCaptain && '🛡️'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default TeamCard

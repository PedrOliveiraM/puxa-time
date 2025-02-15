import { Button } from '@/components/button'
import TeamCard from '@/components/team-card'
import { useGame } from '@/context/GameContext'
import {
  drawTeamsByArrival,
  drawTeamsByPriority,
  drawTeamsBySkill,
  drawTeamsRandomly,
} from '@/services/drawFunctions'
import { styles } from '@/styles/styles.drawerTeams'
import { Team } from '@/types/ITeams'
import { IconArrowNarrowRightDashed } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function DrawerTeams() {
  const { players, settings, captains, setTeams } = useGame()

  const numberOfTeams = settings.numberOfTeams
  const playersPerTeam = settings.playersPerTeam
  const modeSort = settings.modeSort
  const [isVisible, setIsVisible] = useState(false)
  const [teams, setTeam] = useState<Team[]>([])

  const sortFunctions = {
    SKILL: drawTeamsBySkill,
    NULL: drawTeamsRandomly,
    RANDOM: drawTeamsRandomly,
    ARRIVAL: drawTeamsByArrival,
    PRIORITY: drawTeamsByPriority,
  }

  const handleSortTeams = () => {
    const sortFunction = sortFunctions[modeSort]
    

    if (sortFunction) {
      setTeam(sortFunction(players, numberOfTeams, playersPerTeam))
      setIsVisible(true)
      return
    }
    setTeam(drawTeamsRandomly(players, numberOfTeams, playersPerTeam))
    setIsVisible(true)
  }

  const handleScoreboard = () => {
    initialScoreTeams()
    setTeams(teams)
    router.push('/scoreboard')
  }

  const initialScoreTeams = () => {
    const teamsUpdated = teams.map(team => {
      return {
        ...team,
        score: 0,
        victories: 0,
        draws: 0,
        defeats: 0,
      }
    })

    setTeams(teamsUpdated)
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
          <Text style={styles.title}>Sorter Times</Text>
        </View>

        <View style={styles.sortContainer}>
          <Button onPress={() => handleSortTeams()}>
            <Button.Title>Sortear</Button.Title>
          </Button>
        </View>

        <FlatList
          data={teams}
          renderItem={({ item, index }) => (
            <TeamCard
              key={index}
              teamName={item.name}
              captainName={
                item.players.find(player => player.isCaptain)?.name || 'Sem Capitão'
              }
              players={item.players}
              score={item.score}
              victories={0}
              draws={0}
              defeats={0}
            />
          )}
          keyExtractor={item => item.name}
          numColumns={1}
          contentContainerStyle={styles.teamsContainer}
        />

        {isVisible && (
          <View style={styles.footerContainer}>
            <Button variant="success" onPress={handleScoreboard}>
              <Button.Title>Avançar</Button.Title>
              <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
            </Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

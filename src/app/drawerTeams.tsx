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

  useEffect(() => {
    getAllCapitains()
    findAllCapitains()
  }, [])

  const getAllCapitains = () => {
    console.log(
      '1- useEffect: ',
      captains.map(captains => captains.name)
    )
  }

  const findAllCapitains = () => {
    const captains = players.filter(player => player.isCaptain).map(player => player.name)

    console.log('2- findAllCapitains:', captains)
  }

  const handleSortTeams = () => {
    const sortFunction = sortFunctions[modeSort]
    console.log('MODO DE SORTEIO: ', modeSort)
    if (sortFunction) {
      setTeam(sortFunction(players, numberOfTeams, playersPerTeam))
      console.log('if - MODO DE SORTEIO: ', sortFunction)
      setIsVisible(true)
      return
    }
    setTeam(drawTeamsRandomly(players, numberOfTeams, playersPerTeam))
    console.log('if - MODO DE SORTEIO DEFAULT: ', sortFunction)
    setIsVisible(true)
  }

  const handleScoreboard = () => {
    setTeams(teams)
    router.push('/scoreboard')
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
        <Button onPress={() => handleSortTeams()}>
          <Button.Title>Sortear</Button.Title>
        </Button>
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
              onUpdateScore={() => {}}
            />
          )}
          keyExtractor={item => item.name}
          numColumns={1}
          contentContainerStyle={styles.teamsContainer}
        />

        {isVisible && (
          <Button variant="success" onPress={handleScoreboard}>
            <Button.Title>Avançar</Button.Title>
            <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
          </Button>
        )}
      </View>
    </SafeAreaView>
  )
}

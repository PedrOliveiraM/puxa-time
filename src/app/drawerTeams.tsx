import { Button } from '@/components/button'
import { Card } from '@/components/card'
import TeamCard from '@/components/team-card'
import { modeSortArray } from '@/constants/modeSort'
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
import { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function DrawerTeams() {
  const { players, settings, captains } = useGame()

  const numberOfTeams = settings.numberOfTeams // numero de times
  const playersPerTeam = settings.playersPerTeam // numero de jogadores por time
  const modeSort = settings.modeSort // modo de sorteio
  const [isVisible, setIsVisible] = useState(false)
  const [teams, setTeams] = useState<Team[]>([])

  // Dicionário de sorteios
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
    const captains = players
      .filter(player => player.isCaptain) // Filtra os jogadores que são capitães
      .map(player => player.name) // Extrai os nomes dos capitães

    console.log('2- findAllCapitains:', captains)
  }

  const handleSortTeams = () => {
    const sortFunction = sortFunctions[modeSort]
    console.log('MODO DE SORTEIO: ', modeSort)
    if (sortFunction) {
      setTeams(sortFunction(players, numberOfTeams, playersPerTeam))
      console.log('if - MODO DE SORTEIO: ', sortFunction)
      setIsVisible(true)
      return
    }
    setTeams(drawTeamsRandomly(players, numberOfTeams, playersPerTeam))
    console.log('if - MODO DE SORTEIO DEFAULT: ', sortFunction)
    setIsVisible(true)
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
            />
          )}
          keyExtractor={item => item.name}
          numColumns={1}
          contentContainerStyle={styles.teamsContainer}
        />

        {isVisible && (
          <Button variant="success">
            <Button.Title>Avançar</Button.Title>
            <Button.Icon icon={IconArrowNarrowRightDashed} color="white" />
          </Button>
        )}
      </View>
    </SafeAreaView>
  )
}

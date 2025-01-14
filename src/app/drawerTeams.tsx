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
import { useEffect, useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

export default function DrawerTeams() {
  const { players, settings, captains } = useGame()

  const numberOfTeams = settings.numberOfTeams // numero de times
  const playersPerTeam = settings.playersPerTeam // numero de jogadores por time
  const modeSort = settings.modeSort // modo de sorteio
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
      return
    }
    setTeams(drawTeamsRandomly(players, numberOfTeams, playersPerTeam))
    console.log('if - MODO DE SORTEIO DEFAULT: ', sortFunction)
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

        {/* Exibindo os times com o TeamCard */}
        <View style={styles.teamsContainer}>
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              teamName={team.name}
              captainName={
                team.players.find(player => player.isCaptain)?.name || 'Sem Capitão'
              }
              players={team.players}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

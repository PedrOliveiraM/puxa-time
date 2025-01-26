import { Button } from '@/components/button'
import { ModalTemplate } from '@/components/modal'
import ScoreCard from '@/components/score-card'
import { WinnerModal } from '@/components/winnerModal'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.scoreboard'
import { Team } from '@/types/ITeams'
import { IconCheck } from '@tabler/icons-react-native'
import { useEffect, useState } from 'react'
import { Alert, FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function Scoreboard() {
  const { teams, results, updateResults } = useGame()
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [winnerTeams, setWinnerTeams] = useState<Team[]>([])

  useEffect(() => {
    setWinnerTeams(results)
  }, [results])

  const handleSubmit = () => {
    updateResults()
    setWinnerTeams(results)
    setIsVisibleModal(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Image source={require('@/assets/scoreboard.png')} style={styles.randomIcon} />
          <Text style={styles.title}>Placar</Text>
        </View>

        <WinnerModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          winnerTeams={winnerTeams}
        />

        {isVisibleModal && (
          <ModalTemplate
            title="Atenção"
            description="Você está prestes a finalizar o jogo. Deseja ver o vencedor?"
            cancelText="Cancelar"
            confirmText="Ver Vencedor"
            onConfirm={() => setIsVisible(true)}
            onCancel={() => setIsVisibleModal(false)}
          />
        )}

        <FlatList
          data={teams}
          renderItem={({ item, index }) => (
            <ScoreCard
              key={index}
              teamName={item.name}
              captainName={
                item.players.find(player => player.isCaptain)?.name || 'Sem Capitão'
              }
              players={item.players}
              score={item.score}
              draws={item.draws}
              defeats={item.defeats}
              victories={item.victories}
            />
          )}
          keyExtractor={item => item.name}
          numColumns={1} // Define o número de colunas desejado
          contentContainerStyle={styles.teamsContainer}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={handleSubmit} variant="success">
            <Button.Title>Finalizar</Button.Title>
            <Button.Icon icon={IconCheck} color="white" />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

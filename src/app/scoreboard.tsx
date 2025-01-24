import { Button } from '@/components/button'
import ScoreCard from '@/components/score-card'
import { useGame } from '@/context/GameContext'
import { styles } from '@/styles/styles.scoreboard'
import { IconCheck } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { Alert, FlatList, Image, SafeAreaView, Text, View } from 'react-native'

export default function Scoreboard() {
  const { teams } = useGame()

  const handleSubmit = () => {
    Alert.alert(
      'Atenção',
      'Você perderá todas as informações atuais. Deseja realmente reiniciar?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Reiniciar',
          onPress: () => router.replace('/'),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Image source={require('@/assets/scoreboard.png')} style={styles.randomIcon} />
          <Text style={styles.title}>Placar</Text>
        </View>

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

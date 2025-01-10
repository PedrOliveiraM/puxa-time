import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    backgroundColor: colors.background,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
  },
  drawButton: {
    padding: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teamsContainer: {
    flex: 1,
  },
  teamCard: {
    backgroundColor: colors.input.background,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 10,
  },
  playerName: {
    fontSize: 16,
    color: colors.gray[100],
    marginBottom: 5,
  },
  captainName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.orange[300],
    marginBottom: 5,
  },
  iconCaptain: {
    color: colors.orange[300], // Exemplo de cor para capitães
    marginRight: 8,
  },
  iconPlayer: {
    color: colors.button.primary, // Exemplo de cor para jogadores normais
    marginRight: 8,
    fontWeight: 'bold',
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    gap: 10,
  },
  footballIcon: {
    width: 32,
    height: 32,
  }
})

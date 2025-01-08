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
    marginBottom: 20,
    textAlign: 'center',
  },
  drawButton: {
    backgroundColor: colors.button.primary,
    padding: 15,
    borderRadius: 8,
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
    backgroundColor: colors.gray[600],
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
    color: colors.text.secondary,
    marginBottom: 5,
  },
})

import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 20,
  },
  playerList: {
    flex: 1,
  },
  playerItem: {
    backgroundColor: colors.input.background,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedPlayer: {
    backgroundColor: colors.blue[300],
  },
  playerName: {
    fontSize: 16,
    color: colors.text.primary,
  },
  selectedPlayerName: {
    color: colors.white,
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: colors.gray[600],
    borderColor: colors.gray[600],
    marginTop: 20,
  },
  buttonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

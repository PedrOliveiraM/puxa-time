import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scoreButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 4,
    marginVertical: 4,
  },
  scoreButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    padding: 8,
    minWidth: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 60,
    justifyContent: 'center',
  },
  scoreIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
})

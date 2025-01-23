import { colors } from "@/styles/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.input.background,
    padding: 15,
    margin: 10,
    borderRadius: 8,
    shadowColor: colors.background,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text.primary,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  playersContainer: {
    marginBottom: 12,
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  skillIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  playerText: {
    fontSize: 14,
    marginBottom: 3,
    color: colors.text.primary,
  },
  footer: {
    flexDirection: "column",
  },
  scoreButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  scoreButton: {
    backgroundColor: colors.gray[300],
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
  },
  scoreButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 14,
    marginHorizontal: 4,
  },
})


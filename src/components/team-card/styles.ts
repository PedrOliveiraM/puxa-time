import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.input.background,
    padding: 15,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  captain: {
    fontSize: 16,
    marginBottom: 10,
    color: 'green',
  },
  playersContainer: {
    marginTop: 10,
  },
  player: {
    fontSize: 14,
    marginBottom: 3,
    color: colors.text.primary,
  },
})
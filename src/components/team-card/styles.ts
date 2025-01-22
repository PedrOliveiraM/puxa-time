import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

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
    width: 200,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.text.primary,
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
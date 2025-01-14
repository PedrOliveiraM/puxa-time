import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 8,
    backgroundColor: colors.blue[300],
    margin: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    padding: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray[100],
    textAlign: 'center',
    padding: 10,
  },
  selectedContainer: {
    backgroundColor: colors.orange[300],
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

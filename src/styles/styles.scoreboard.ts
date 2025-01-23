import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fontFamily } from "./font-family";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.gray[100],
    fontFamily: fontFamily.bold,
  },
  playerItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: colors.input.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedItem: {
    backgroundColor: colors.button.primary,
    borderColor: colors.button.secondary,
  },
  playerText: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fontFamily.regular,
  },
  skillButtons: {
    flexDirection: 'row',
    gap: 5,
  },
  skillButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[300],
    backgroundColor: colors.input.background,
  },
  selectedSkillButton: {
    backgroundColor: colors.button.primary,
    borderColor: colors.button.secondary,
  },
  skillButtonText: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.text.primary,
  },
  buttonContainer: {
    marginTop: 16,
    gap: 8,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 5,
  },
  randomIcon: {
    width: 32,
    height: 32,
    color: colors.blue[300],
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    gap: 10,
  },
  emoji: {
    width: 30,
    height: 30,
    padding: 5,
  },
  selectedButton: {
    padding: 5,
    backgroundColor: colors.button.primary,
    borderColor: colors.button.secondary,
  },
  skillButtonsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  skillImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  teamsContainer: {
    justifyContent: 'center', // Centraliza os itens horizontalmente
    alignItems: 'center',    // Garante alinhamento vertical
    paddingVertical: 16,     // Espaço ao redor dos cartões
  },

})
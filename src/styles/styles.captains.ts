import { StyleSheet } from "react-native"
import { colors } from "./colors"
import { fontFamily } from "./font-family"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.gray[100],
    fontFamily: fontFamily.bold,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.gray[200],
    fontFamily: fontFamily.bold,
    paddingBottom: 10,
  },
  playerItem: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    backgroundColor: colors.input.background
  },
  selectedItem: {
    backgroundColor: colors.button.primary,
    borderColor: colors.button.secondary,
  },
  playerText: {
    fontSize: 18,
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
    gap: 10
  },
  mainContainer: {
    flexDirection: 'column',
    gap: 16,
  }
})

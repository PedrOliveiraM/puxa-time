import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: colors.input.background,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  popularCard: {
    borderColor: colors.orange[300],
    borderWidth: 2,
  },
  popularTag: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.orange[300],
    color: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.blue[300],
    marginBottom: 5,
  },
  period: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  switchSelector: {
    marginVertical: 20,
    width: '80%',
    alignSelf: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 5,
  },

})


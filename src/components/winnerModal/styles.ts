import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  trophyImage: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  stats: {
    fontSize: 16,
  },
  players: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2
  },
  buttonBack: {
    width: '50%',
    borderColor: colors.orange[300],
  },
  buttonFinish: {
    width: '50%',
    borderColor: colors.green[300],
  }
});

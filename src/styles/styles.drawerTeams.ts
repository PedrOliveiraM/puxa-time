import { Platform, StyleSheet } from 'react-native'
import { colors } from './colors'
import { fontFamily } from './font-family'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    ...Platform.select({
      android: {
        paddingHorizontal: 10,
        paddingBottom: 10,
      },
      ios: {
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
    }),
    backgroundColor: colors.background,
  },
  sortContainer: {
    width: '100%',
    padding: 10,
    ...Platform.select({
      android: {
        paddingHorizontal: 10,
      },
      ios: {
        paddingHorizontal: 50,
      },
    }),
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
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 5,
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  footerContainer: {
    width: '100%',
    padding: 10,
    ...Platform.select({
      android: {
        paddingHorizontal: 10,
      },
      ios: {
        paddingHorizontal: 50,
      },
    }),
  },
})

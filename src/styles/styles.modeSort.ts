import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text.primary,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  buttonFooter: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    width: '97%',
  },
  flatContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
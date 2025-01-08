import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    color: colors.gray[100],
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    textAlign: 'center',
    color: colors.gray[100],
    marginBottom: 40,
  },
})

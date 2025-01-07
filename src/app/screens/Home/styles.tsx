import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
})

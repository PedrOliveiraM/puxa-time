import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.gray[100],
    justifyContent: 'center',
    gap: 14,
  },
  title: {
    fontSize: 16,
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
  },
  success: {
    backgroundColor: colors.green[300],
    borderColor: colors.green[900],
    borderWidth: 1,
  },
  alert: {
    backgroundColor: colors.orange[300],
    borderWidth: 1,
  },
  danger: {
    backgroundColor: colors.red[300],
    borderColor: colors.red[900],
    borderWidth: 1,
  },
  default: {
    backgroundColor: colors.button.primary,
    borderColor: colors.button.primary,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: colors.gray[600],
    borderColor: colors.gray[600],
    borderWidth: 1,
  }
})

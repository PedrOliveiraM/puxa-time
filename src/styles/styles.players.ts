import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { Platform, StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text.primary,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.gray[100],
    fontFamily: fontFamily.bold,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    gap: 10,
  },
  input: {
    backgroundColor: colors.input.background,
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
    color: colors.input.text,
    width: '90%',
    minWidth: '100%',
  },
  textarea: {
    minHeight: 100,
    ...Platform.select({
      ios: {
        maxHeight: 200,
      },
      android: {
        maxHeight: 100,
      },
    }),
    textAlignVertical: 'top',
  },
  errorText: {
    color: colors.error,
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    minWidth: '100%',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  playerListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonPaste: {
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius: 8,
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
  footballIcon: {
    width: 32,
    height: 32,
    color: colors.blue[300],
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
})
